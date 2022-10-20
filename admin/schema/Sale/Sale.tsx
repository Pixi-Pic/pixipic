import { join } from 'path';
import { get } from 'lodash';
import { generatePath } from 'react-router';
import { list, graphql } from '@keystone-6/core';
import { relationship, float, timestamp, virtual } from '@keystone-6/core/fields';
import { ApiPath } from '../../constants';

export const Sale = list({
  fields: {
    created: timestamp({
      defaultValue: {
        kind: 'now',
      },
    }),
    frame: relationship({
      ref: 'Frame',
    }),
    image: relationship({
      ref: 'Image',
    }),
    price: float({
      validation: { isRequired: true },
    }),
    boxManual: virtual({
      field: graphql.field({
        type: graphql.String,
        resolve: (item) => generatePath(ApiPath.SALE_DOC_BOX_MANUAL, { id: get(item, 'id', '') }),
      }),
      ui: {
        views: join(__dirname, './boxManual/Views'),
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'hidden' },
        listView: { fieldMode: 'read' },
      },
    }),
    userManual: virtual({
      field: graphql.field({
        type: graphql.String,
        resolve: (item) => generatePath(ApiPath.SALE_DOC_USER_MANUAL, { id: get(item, 'id', '') }),
      }),
      ui: {
        views: join(__dirname, './userManual/Views'),
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'hidden' },
        listView: { fieldMode: 'read' },
      },
    }),
  },
  ui: {
    hideCreate: true,
    listView: {
      initialSort: {
        field: 'created',
        direction: 'DESC',
      },
      initialColumns: ['created', 'frame', 'image', 'price', 'boxManual', 'userManual'],
    },
  },
});
