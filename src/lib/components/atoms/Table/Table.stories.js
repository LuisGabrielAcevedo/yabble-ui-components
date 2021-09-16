import React from 'react'

import {Table as TableComponent} from './Table'

export default {
  title: 'Yabble/Atoms/Table',
  component: TableComponent,
  argTypes: {},
}

const Template = args => <TableComponent {...args} />

export const SimpleTable = Template.bind({})
SimpleTable.args = {
    blocking: false,
    headers: [
        {
            label: 'Project',
            key: 'projectName',
            component: 'TextElement',
            flex: 1.9,
            sort: true,
            initSort: false,
            sortType: 'string',
        },
        {
            label: 'Report name',
            key: 'reportName',
            component: 'TextElement',
            flex: 1.1,
            sort: true,
            initSort: false,
            sortType: 'string',
        },
        {
            label: 'Created',
            key: 'created',
            component: 'TextElement',
            sort: true,
            initSort: true,
            sortType: 'date',
        },
        {
            label: 'Completed',
            key: 'completed',
            component: 'TextElement',
            sort: true,
            initSort: true,
            sortType: 'date',
        },
        {
            label: 'Count',
            key: 'count',
            component: 'TextElement',
            sort: true,
            initSort: true,
            flex: 0.8,
            sortType: 'string',
        }
    ],
    data: [
        {
            projectName: 'Text 1',
            reportName: 'Text 1',
            created: 'Text 1',
            completed: 'Text 1',
            count: 'Text 1'
        },
        {
            projectName: 'Text 2',
            reportName: 'Text 2',
            created: 'Text 2',
            completed: 'Text 2',
            count: 'Text 2'
        },
        {
            projectName: 'Text 3',
            reportName: 'Text 3',
            created: 'Text 3',
            completed: 'Text 3',
            count: 'Text 3'
        }
    ],
    perPage: 10
}
