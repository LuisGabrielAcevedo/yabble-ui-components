import React from 'react'
import {NestedMenu} from './Dropdowns'

export default {
  title: 'Yabble/Atoms/Menu',
  component: NestedMenu,
  argTypes: {},
}

const Template = args => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <NestedMenu {...args} />
    </div>
  )
}

export const FlitersMenu = Template.bind({})
FlitersMenu.args = {
  addFilter: () => {},
  filters: [
    {
      subject_type_id: 'demographics',
      subject_type_name: 'Demographics',
      subjects: [
        {
          subject_id: 'gender',
          subject_name: 'Gender',
          values: [
            {
              value_id: 'male',
              value_name: 'Male',
            },
            {
              value_id: 'female',
              value_name: 'Female',
            },
            {
              value_id: 'gender-diverse',
              value_name: 'Gender Diverse',
            },
          ],
        },
        {
          subject_id: 'age',
          subject_name: 'Age Group',
          values: [
            {
              value_id: '<18',
              value_name: '<18',
            },
            {
              value_id: '18-24',
              value_name: '18-24',
            },
            {
              value_id: '25-34',
              value_name: '25-34',
            },
            {
              value_id: '35-44',
              value_name: '35-44',
            },
            {
              value_id: '45-54',
              value_name: '45-54',
            },
            {
              value_id: '55-64',
              value_name: '55-64',
            },
            {
              value_id: '65-74',
              value_name: '65-74',
            },
            {
              value_id: '75-100',
              value_name: '75+',
            },
          ],
        },
        {
          subject_id: 'region',
          subject_name: 'Region',
          values: [
            {
              value_id: 'cd69a404-c050-4c1c-b271-ec3a710ad32f',
              value_name: 'Northland',
            },
            {
              value_id: '1e20ceea-e32d-4a99-86ec-9da7b2e6a0ec',
              value_name: 'Auckland',
            },
            {
              value_id: '8b720d18-f927-4851-b85f-4b89bb129dcb',
              value_name: 'Waikato',
            },
            {
              value_id: '11f440c4-ea9f-46ad-a27d-86414261b605',
              value_name: 'Bay Of Plenty',
            },
            {
              value_id: '2aa1cb75-be71-40a9-841b-926f19e4d07e',
              value_name: 'Gisborne',
            },
            {
              value_id: '019ede8a-2e9f-4e15-aca2-f90157651ac1',
              value_name: "Hawke's Bay",
            },
            {
              value_id: '9f497b68-17f3-44b4-9955-3d966869dd61',
              value_name: 'Taranaki',
            },
            {
              value_id: 'cb7c9e23-0625-4451-8631-dfce56f441f9',
              value_name: 'Manawatu-Whanganui',
            },
            {
              value_id: 'b2c4ba4f-bdcd-4ac4-9958-410e86d76c00',
              value_name: 'Wellington',
            },
            {
              value_id: '56ebdecc-6c68-427f-982d-4b2fb872bc93',
              value_name: 'Tasman',
            },
            {
              value_id: '263dbaf0-cc50-4a07-aeff-54bb52431b95',
              value_name: 'Nelson',
            },
            {
              value_id: 'be2f4d59-fd12-4a8d-982e-fef000b3b624',
              value_name: 'Marlborough',
            },
            {
              value_id: '6bcf03cb-4afa-461b-9b9e-57418e6d85c4',
              value_name: 'West Coast',
            },
            {
              value_id: '46212160-d66a-46b5-acb2-3a980a38c8d8',
              value_name: 'Christchurch',
            },
            {
              value_id: '95a99757-deac-48e6-9bf6-c8c092b030a7',
              value_name: 'Canterbury',
            },
            {
              value_id: '7ba026f8-3d46-4f99-a81d-ba133d221298',
              value_name: 'Otago',
            },
            {
              value_id: '11c2cda5-90c7-483c-95c7-7d1c8cc1ae3b',
              value_name: 'Southland',
            },
            {
              value_id: 'f1a451b8-4803-420d-84bd-1422bff32632',
              value_name: 'Other',
            },
            {
              value_id: 'e926345c-5234-48ad-a66c-e8eebe156e6a',
              value_name: 'Sydney',
            },
            {
              value_id: '538f34d7-5b58-4f47-8f54-4f9e7932a2de',
              value_name: 'NSW Regional',
            },
            {
              value_id: '7d2c02c8-870b-4cf3-9687-4384b89c3cd4',
              value_name: 'Melbourne',
            },
            {
              value_id: '6e27bb96-fdd6-486d-98a8-8b1dcdafaeb3',
              value_name: 'VIC Regional',
            },
            {
              value_id: '4aefd769-d849-42a2-acac-e7fd1c26d006',
              value_name: 'Brisbane',
            },
            {
              value_id: 'b31cb911-febe-45d6-872b-b4f4c446ce00',
              value_name: 'QLD Regional',
            },
            {
              value_id: 'f60c5c15-8d75-484d-a896-2b4896fb37a3',
              value_name: 'Perth',
            },
            {
              value_id: 'bfb09b8a-88fe-4223-8e38-4f75cebd6389',
              value_name: 'WA Regional',
            },
            {
              value_id: 'b1c97d60-d194-43b9-a654-f47ebb43465e',
              value_name: 'Adelaide',
            },
            {
              value_id: 'eda4b849-934f-4488-87ef-269f2c7eb1e1',
              value_name: 'SA Regional',
            },
            {
              value_id: '9f3c4dae-584f-445c-9c69-e4349a324866',
              value_name: 'Hobart',
            },
            {
              value_id: 'd82bdce1-1e99-4ede-9f85-cb77fac30f10',
              value_name: 'TAS Regional',
            },
            {
              value_id: '1d37ab39-bb3c-420d-b1ca-e1def35d6533',
              value_name: 'Darwin',
            },
            {
              value_id: 'd3e3d7fd-a622-47e6-a420-22a3af94641d',
              value_name: 'NT Regional',
            },
            {
              value_id: 'fad5e8ce-940f-4c59-b173-4453c9dc5320',
              value_name: 'ACT',
            },
          ],
        },
        {
          subject_id: 'ethnicity',
          subject_name: 'Ethnicity',
          values: [
            {
              value_id: '8ab04be7-de5b-43b1-8e30-fcee4caa157d',
              value_name: 'Chinese',
            },
            {
              value_id: '9f62cb59-7def-4ed3-8b24-13e2651745cb',
              value_name: 'Indian',
            },
            {
              value_id: 'b301a694-c830-45fd-a20b-37e5f24d0a52',
              value_name: 'Maori',
            },
            {
              value_id: '437470e4-9e01-42f7-84cf-aa98c9dbce4c',
              value_name: 'NZ European',
            },
            {
              value_id: 'eba4b2cf-ef13-472b-9b00-98df176bb1c7',
              value_name: 'Other',
            },
            {
              value_id: '4e535c51-38fe-4c81-a582-b30aa04f9711',
              value_name: 'Other Asian',
            },
            {
              value_id: '87d86506-acf4-4f31-9c93-9c9a114a82f3',
              value_name: 'Pacific Islander',
            },
            {
              value_id: 'd31fa18c-c768-4a9c-9a88-80aa15dc7eab',
              value_name: 'Australian European',
            },
            {
              value_id: '951de42a-dfa0-4a6a-8ae1-6d765d30237a',
              value_name: 'Indigenous Australian',
            },
          ],
        },
        {
          subject_id: 'household',
          subject_name: 'Household',
          values: [
            {
              value_id: 'daf56cdf-08d9-4faa-9947-6dbb0726ec96',
              value_name: 'Older family',
            },
            {
              value_id: '8bd0aeca-52c1-405b-9996-9e325e322fb7',
              value_name: 'Older couple Single',
            },
            {
              value_id: 'b686ee2a-9882-4ae4-be27-0b16e5d1beac',
              value_name: 'Younger couple Single',
            },
            {
              value_id: 'dc3ace14-481c-4a1d-a4fa-9aacd48b4ee0',
              value_name: 'Younger family',
            },
          ],
        },
      ],
    },
    {
      subject_type_id: 'responseDate',
      subject_type_name: 'Response Date',
      subjects: [
        {
          subject_id: 'responseDate',
          subject_name: 'Response Date',
          values: null,
        },
      ],
    },
    {
      subject_type_id: 'variable',
      subject_type_name: 'Variables',
      subjects: [],
    },
    {
      subject_type_id: 'questionResponse',
      subject_type_name: 'Question Response',
      subjects: [],
    },
  ],
  disabled: false,
}
