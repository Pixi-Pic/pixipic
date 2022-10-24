import { list } from '@keystone-6/core';
import { text, password, select } from '@keystone-6/core/fields';
import { UserRole } from '../../constants';

export const User = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
      isFilterable: true,
    }),
    role: select({
      type: 'enum',
      validation: { isRequired: true },
      options: [UserRole.ADMIN, UserRole.MANAGER],
    }),
    password: password({ validation: { isRequired: true } }),
  },
  ui: {
    isHidden: ({
      session: {
        data: { role },
      },
    }) => {
      return role !== UserRole.ADMIN;
    },
    listView: {
      initialColumns: ['name', 'role'],
    },
  },
});
