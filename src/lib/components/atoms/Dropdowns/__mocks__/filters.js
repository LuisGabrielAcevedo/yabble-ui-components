export const filtersMock = [
  {
    subject_type_id: 'demographics',
    subject_type_name: 'Demographics',
    subjects: [
      {
        subject_id: 'gender',
        subject_name: 'Gender',
        values: [
          {value_id: 'male', value_name: 'Male'},
          {value_id: 'female', value_name: 'Female'},
          {value_id: 'gender-diverse', value_name: 'Gender Diverse'},
        ],
      },
      {
        subject_id: 'age',
        subject_name: 'Age Group',
        values: [
          {value_id: '<18', value_name: '<18'},
          {value_id: '18-24', value_name: '18-24'},
          {value_id: '25-34', value_name: '25-34'},
          {value_id: '35-44', value_name: '35-44'},
          {value_id: '45-54', value_name: '45-54'},
          {value_id: '55-64', value_name: '55-64'},
          {value_id: '65-74', value_name: '65-74'},
          {value_id: '75-100', value_name: '75+'},
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
          {value_id: 'fad5e8ce-940f-4c59-b173-4453c9dc5320', value_name: 'ACT'},
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
            value_name: 'Older couple / Single',
          },
          {
            value_id: 'b686ee2a-9882-4ae4-be27-0b16e5d1beac',
            value_name: 'Younger couple / Single',
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
      {subject_id: 'responseDate', subject_name: 'Response Date', values: null},
    ],
  },
  {
    subject_type_id: 'variable',
    subject_type_name: 'Variables',
    subjects: [
      {
        subject_id: 'Fav Car',
        subject_name: 'Fav Car',
        values: [
          {value_id: 'BMW', value_name: 'BMW'},
          {value_id: 'Toyota', value_name: 'Toyota'},
          {value_id: 'Mazda', value_name: 'Mazda'},
        ],
      },
      {
        subject_id: 'Ticket Type',
        subject_name: 'Ticket Type',
        values: [
          {value_id: 'Passenger', value_name: 'Passenger'},
          {value_id: 'Car', value_name: 'Car'},
        ],
      },
      {
        subject_id: 'Age Group',
        subject_name: 'Age Group',
        values: [
          {value_id: '<35', value_name: '<35'},
          {value_id: '35-44', value_name: '35-44'},
          {value_id: '45-54', value_name: '45-54'},
          {value_id: '55-64', value_name: '55-64'},
          {value_id: '65-74', value_name: '65-74'},
          {value_id: '75+', value_name: '75+'},
        ],
      },
      {
        subject_id: 'Breakfast',
        subject_name: 'Breakfast',
        values: [
          {value_id: 'Cereal', value_name: 'Cereal'},
          {value_id: 'Coffee', value_name: 'Coffee'},
          {value_id: 'Juice', value_name: 'Juice'},
          {value_id: 'Oats', value_name: 'Oats'},
          {value_id: 'Quinoa', value_name: 'Quinoa'},
          {value_id: 'Smoothie', value_name: 'Smoothie'},
          {value_id: 'Toast', value_name: 'Toast'},
        ],
      },
      {
        subject_id: 'Coffee Drinkers',
        subject_name: 'Coffee Drinkers',
        values: [
          {value_id: 'Flat White', value_name: 'Flat White'},
          {value_id: 'Long Black', value_name: 'Long Black'},
          {value_id: 'Macchiato', value_name: 'Macchiato'},
          {value_id: 'null', value_name: 'null'},
        ],
      },
      {
        subject_id: 'Places',
        subject_name: 'Places',
        values: [
          {value_id: 'Car', value_name: 'Car'},
          {value_id: 'Boat', value_name: 'Boat'},
          {value_id: 'Plane', value_name: 'Plane'},
          {value_id: 'Home ', value_name: 'Home '},
          {value_id: 'Office', value_name: 'Office'},
        ],
      },
      {
        subject_id: 'Shopping Frequency',
        subject_name: 'Shopping Frequency',
        values: [
          {value_id: 'Weekly', value_name: 'Weekly'},
          {value_id: 'Monthly', value_name: 'Monthly'},
          {value_id: 'Less often', value_name: 'Less often'},
        ],
      },
      {
        subject_id: 'Store List',
        subject_name: 'Store List',
        values: [
          {
            value_id: 'Fresh Collective Alberton',
            value_name: 'Fresh Collective Alberton',
          },
          {value_id: 'New World Albany', value_name: 'New World Albany'},
          {value_id: 'New World Alexandra', value_name: 'New World Alexandra'},
          {value_id: 'New World Aokautere', value_name: 'New World Aokautere'},
          {value_id: 'New World Ashburton', value_name: 'New World Ashburton'},
          {value_id: 'New World Balclutha', value_name: 'New World Balclutha'},
          {
            value_id: 'New World Birkenhead',
            value_name: 'New World Birkenhead',
          },
          {
            value_id: 'New World Bishopdale',
            value_name: 'New World Bishopdale',
          },
          {value_id: 'New World Blenheim', value_name: 'New World Blenheim'},
          {value_id: 'New World Botany', value_name: 'New World Botany'},
          {
            value_id: 'New World Brookfield',
            value_name: 'New World Brookfield',
          },
          {
            value_id: 'New World Browns Bay',
            value_name: 'New World Browns Bay',
          },
          {value_id: 'New World Cambridge', value_name: 'New World Cambridge'},
          {value_id: 'New World Carterton', value_name: 'New World Carterton'},
          {
            value_id: 'New World Centre City',
            value_name: 'New World Centre City',
          },
          {
            value_id: 'New World Churton Park',
            value_name: 'New World Churton Park',
          },
          {value_id: 'New World Cromwell', value_name: 'New World Cromwell'},
          {
            value_id: 'New World Dannevirke',
            value_name: 'New World Dannevirke',
          },
          {value_id: 'New World Devonport', value_name: 'New World Devonport'},
          {
            value_id: 'New World Durham Street',
            value_name: 'New World Durham Street',
          },
          {value_id: 'New World Eastridge', value_name: 'New World Eastridge'},
          {
            value_id: 'New World Elles Road',
            value_name: 'New World Elles Road',
          },
          {value_id: 'New World Feilding', value_name: 'New World Feilding'},
          {value_id: 'New World Fendalton', value_name: 'New World Fendalton'},
          {
            value_id: 'New World Ferry Road',
            value_name: 'New World Ferry Road',
          },
          {value_id: 'New World Flaxmere', value_name: 'New World Flaxmere'},
          {value_id: 'New World Foxton', value_name: 'New World Foxton'},
          {value_id: 'New World Gardens', value_name: 'New World Gardens'},
          {value_id: 'New World Gate Pa', value_name: 'New World Gate Pa'},
          {value_id: 'New World Glenview', value_name: 'New World Glenview'},
          {value_id: 'New World Gore', value_name: 'New World Gore'},
          {value_id: 'New World Green Bay', value_name: 'New World Green Bay'},
          {
            value_id: 'New World Greenmeadows',
            value_name: 'New World Greenmeadows',
          },
          {value_id: 'New World Greymouth', value_name: 'New World Greymouth'},
          {value_id: 'New World Halswell', value_name: 'New World Halswell'},
          {value_id: 'New World Hastings', value_name: 'New World Hastings'},
          {
            value_id: 'New World Havelock North',
            value_name: 'New World Havelock North',
          },
          {value_id: 'New World Hillcrest', value_name: 'New World Hillcrest'},
          {
            value_id: 'New World Hobsonville',
            value_name: 'New World Hobsonville',
          },
          {value_id: 'New World Hokitika', value_name: 'New World Hokitika'},
          {value_id: 'New World Howick', value_name: 'New World Howick'},
          {value_id: 'New World Hutt City', value_name: 'New World Hutt City'},
          {value_id: 'New World Ilam', value_name: 'New World Ilam'},
          {value_id: 'New World Inglewood', value_name: 'New World Inglewood'},
          {
            value_id: 'New World Island Bay',
            value_name: 'New World Island Bay',
          },
          {value_id: 'New World Kaiapoi', value_name: 'New World Kaiapoi'},
          {value_id: 'New World Kaikohe', value_name: 'New World Kaikohe'},
          {value_id: 'New World Kaikoura', value_name: 'New World Kaikoura'},
          {value_id: 'New World Kapiti', value_name: 'New World Kapiti'},
          {value_id: 'New World Karori', value_name: 'New World Karori'},
          {value_id: 'New World Kawerau', value_name: 'New World Kawerau'},
          {value_id: 'New World Kerikeri', value_name: 'New World Kerikeri'},
          {
            value_id: 'New World Khandallah',
            value_name: 'New World Khandallah',
          },
          {value_id: 'New World Kumeu', value_name: 'New World Kumeu'},
          {value_id: 'New World Levin', value_name: 'New World Levin'},
          {value_id: 'New World Lincoln', value_name: 'New World Lincoln'},
          {value_id: 'New World Long Bay', value_name: 'New World Long Bay'},
          {value_id: 'New World Marton', value_name: 'New World Marton'},
          {value_id: 'New World Masterton', value_name: 'New World Masterton'},
          {value_id: 'New World Matamata', value_name: 'New World Matamata'},
          {value_id: "New World Melody's", value_name: "New World Melody's"},
          {
            value_id: 'New World Merrilands',
            value_name: 'New World Merrilands',
          },
          {
            value_id: 'New World Metro Queen Street',
            value_name: 'New World Metro Queen Street',
          },
          {value_id: 'New World Milford', value_name: 'New World Milford'},
          {value_id: 'New World Miramar', value_name: 'New World Miramar'},
          {
            value_id: 'New World Morrinsville',
            value_name: 'New World Morrinsville',
          },
          {value_id: 'New World Mosgiel', value_name: 'New World Mosgiel'},
          {value_id: 'New World Motueka', value_name: 'New World Motueka'},
          {
            value_id: 'New World Mt Maunganui',
            value_name: 'New World Mt Maunganui',
          },
          {
            value_id: 'New World Mt Roskill',
            value_name: 'New World Mt Roskill',
          },
          {
            value_id: 'New World Nelson City',
            value_name: 'New World Nelson City',
          },
          {value_id: 'New World New Lynn', value_name: 'New World New Lynn'},
          {
            value_id: 'New World New Plymouth',
            value_name: 'New World New Plymouth',
          },
          {value_id: 'New World Newlands', value_name: 'New World Newlands'},
          {value_id: 'New World Newtown', value_name: 'New World Newtown'},
          {
            value_id: 'New World Ngaruawahia',
            value_name: 'New World Ngaruawahia',
          },
          {value_id: 'New World Northwood', value_name: 'New World Northwood'},
          {value_id: 'New World Oamaru', value_name: 'New World Oamaru'},
          {value_id: 'New World Ohakune', value_name: 'New World Ohakune'},
          {value_id: 'New World Onekawa', value_name: 'New World Onekawa'},
          {value_id: 'New World Onerahi', value_name: 'New World Onerahi'},
          {value_id: 'New World Opotiki', value_name: 'New World Opotiki'},
          {value_id: 'New World Orewa', value_name: 'New World Orewa'},
        ],
      },
    ],
  },
  {
    subject_type_id: 'questionResponse',
    subject_type_name: 'Question Response',
    subjects: [
      {
        subject_id: '46759f79-fb73-4b68-95c0-dbfdd0e4ebb2',
        subject_name: 'How do you FEEL about the new look Ford Mustang?',
        values: [
          {value_id: '0', value_name: 'Angry'},
          {value_id: '1', value_name: 'Disappointed'},
          {value_id: '2', value_name: 'Neutral'},
          {value_id: '3', value_name: 'Happy'},
          {value_id: '4', value_name: 'Delighted'},
        ],
      },
      {
        subject_id: '40326598-f1be-4d61-b567-4652952e1679',
        subject_name: 'why do you like these  colours ? ',
        values: [
          {
            value_id: '4a52b891-6117-4311-821c-fa40f720b36d',
            value_name: 'Mazda',
          },
          {
            value_id: '071415a3-9a16-474f-92d2-52ba3254d005',
            value_name: 'Mustang',
          },
        ],
      },
      {
        subject_id: '539c36bb-5cfd-4a40-8ffd-cb1c2f4175fd',
        subject_name: 'How likely are you to buy a new car this year?',
        values: [
          {value_id: 1, value_name: '1'},
          {value_id: 2, value_name: '2'},
          {value_id: 3, value_name: '3'},
          {value_id: 4, value_name: '4'},
          {value_id: 5, value_name: '5'},
          {value_id: 6, value_name: '6'},
          {value_id: 7, value_name: '7'},
          {value_id: 8, value_name: '8'},
          {value_id: 9, value_name: '9'},
          {value_id: 10, value_name: '10'},
        ],
      },
      {
        subject_id: '37ced376-eaf2-4ddd-b33b-95bc8d4c2beb',
        subject_name: 'How likely are you to recommend Mustangs to others?',
        values: [
          {value_id: 0, value_name: '0 - Not at all likely'},
          {value_id: 1, value_name: '1'},
          {value_id: 2, value_name: '2'},
          {value_id: 3, value_name: '3'},
          {value_id: 4, value_name: '4'},
          {value_id: 5, value_name: '5'},
          {value_id: 6, value_name: '6'},
          {value_id: 7, value_name: '7'},
          {value_id: 8, value_name: '8'},
          {value_id: 9, value_name: '9'},
          {value_id: 10, value_name: '10 - Very likely'},
        ],
      },
      {
        subject_id: 'b992473a-c2b8-4c34-adfb-66dca1668d07',
        subject_name: 'How does the new Mustang feel to drive?',
        values: [
          {value_id: '0', value_name: '1 star'},
          {value_id: '1', value_name: '2 stars'},
          {value_id: '2', value_name: '3 stars'},
          {value_id: '3', value_name: '4 stars'},
          {value_id: '4', value_name: '5 stars'},
        ],
      },
      {
        subject_id: '5c126339-0e5f-46cb-b736-70f9b6e3f95a',
        subject_name:
          'Compared to driving any other sports cars are Mustangs....',
        values: [
          {value_id: '0', value_name: 'Very Difficult'},
          {value_id: '1', value_name: 'Difficult'},
          {value_id: '2', value_name: 'Neither'},
          {value_id: '3', value_name: 'Easy'},
          {value_id: '4', value_name: 'Very Easy'},
        ],
      },
      {
        subject_id: '5c21f1ee-0d66-4ec7-b1aa-f353ffd39bda',
        subject_name: 'Where would you want to go to test drive a new Mustang?',
        values: [
          {
            value_id: '3da55e84-8aa3-408e-aeed-5bdd4fbaa7e4',
            value_name: 'North Shore',
          },
          {
            value_id: '5264908e-82d6-4b00-9eef-60f836ca0a76',
            value_name: 'West Auckland',
          },
          {
            value_id: '87adfda6-00ed-417f-b9aa-e485a880246e',
            value_name: 'Central Auckland',
          },
          {
            value_id: '92ab258b-d6ec-47c0-b25f-dae224ba4fa4',
            value_name: 'South Auckland',
          },
          {
            value_id: '27b4a079-6944-40f8-937b-78f02e4ab69c',
            value_name: 'Central Wellington',
          },
          {
            value_id: '725ecced-4520-4408-a282-3559017a6fa0',
            value_name: 'Lower Hutt',
          },
          {
            value_id: '49140b26-ea65-4c0f-850c-766e79607be0',
            value_name: 'Kapiti Coast',
          },
        ],
      },
      {
        subject_id: '0ff72a2f-6fb9-42ca-a7e1-2e6535cf0eb7',
        subject_name: 'Do you want leather seats as standard?',
        values: [
          {value_id: '0', value_name: 'No'},
          {value_id: '1', value_name: 'Yes'},
        ],
      },
      {
        subject_id: '8fbeded0-5972-4b5a-b17f-af1ccb326859',
        subject_name: 'Which of these coloured lights do you prefer?',
        values: [
          {
            value_id: 'ba2bef86-59cc-4ae9-b23a-6bc04fb0da60',
            value_name: 'Blue',
          },
          {
            value_id: 'fc303af7-2fb0-480a-8cc0-597bf784911e',
            value_name: 'Cyan',
          },
          {
            value_id: '74625b03-06af-42ee-a631-e5b7230b2a50',
            value_name: 'Green',
          },
          {
            value_id: '984b26ba-9690-4072-bded-239eb554e3ee',
            value_name: 'Purple',
          },
          {
            value_id: '46e1138b-14fa-4f7f-958d-33dd08ba0168',
            value_name: 'White',
          },
          {
            value_id: 'ff9ac350-1d09-4676-ba01-6565000d5b5e',
            value_name: 'None of these',
          },
        ],
      },
      {
        subject_id: '62417e03-cf5f-4bb9-8407-cba586ebba1d',
        subject_name:
          'Which of these car brands do you think are the closest competitors to Mustang?',
        values: [
          {
            value_id: '39de99f4-d7a6-4f49-9e5e-0801eb3e0acb',
            value_name: 'Aston Martin',
          },
          {
            value_id: 'af73450d-4445-4702-a00f-e52e5f74e9cc',
            value_name: 'Chevrolet',
          },
          {
            value_id: '564a2f93-a740-4713-ac0f-156b0d639b04',
            value_name: 'Corvette',
          },
          {
            value_id: 'e94dcfcc-72db-4619-bb9e-2a643b07cece',
            value_name: 'Tesla',
          },
          {
            value_id: '7e332cd3-360f-4518-86a1-103966e27733',
            value_name: 'Ferrari',
          },
        ],
      },
      {
        subject_id: '10ab7c75-2631-4d91-933c-f8b6e302afb4',
        subject_name: 'Do you want to join our research group?',
        values: [
          {value_id: '0', value_name: 'No'},
          {value_id: '1', value_name: 'Yes'},
        ],
      },
      {
        subject_id: '94d7241c-131e-48d3-a062-958cef49ec81',
        subject_name: 'Thinking about other cars which are your favourites?',
        values: [
          {
            value_id: 'f1ea9250-2a10-4e9d-ae6e-90defed67533',
            value_name: 'Tesla',
          },
          {
            value_id: '3d13ba13-d562-4ba7-8f0a-debb02b6086f',
            value_name: 'Range Rover',
          },
          {
            value_id: 'c0faca49-cda0-45a5-8f21-327cbb8be6da',
            value_name: 'Mazda',
          },
          {
            value_id: '745e0449-4a14-4e02-a9f7-7ee00792ec14',
            value_name: 'Police Car',
          },
          {
            value_id: 'f3243436-34a7-4bd4-aaca-0386b36d2020',
            value_name: 'Mini',
          },
        ],
      },
      {
        subject_id: '16a1c155-bda1-4f6e-be83-f77cbc47a182',
        subject_name: 'How hard was it to purchase the new Mustang?',
        values: [
          {value_id: '0', value_name: 'Very Difficult'},
          {value_id: '1', value_name: 'Difficult'},
          {value_id: '2', value_name: 'Neither'},
          {value_id: '3', value_name: 'Easy'},
          {value_id: '4', value_name: 'Very Easy'},
        ],
      },
      {
        subject_id: '52fa1a76-9355-43ee-baae-060b31ffbaea',
        subject_name:
          'Which of the features is MOST important to you when picking your window shades? ',
        values: [
          {
            value_id: '90292bef-10cf-4cb9-8447-960c582ac23d',
            value_name: 'Light control',
          },
          {
            value_id: 'aefd9650-a451-4f53-aaa9-41073a409639',
            value_name: 'Insulation',
          },
          {
            value_id: 'ef97a021-ad18-42f6-bab0-76b5fb79444c',
            value_name: 'Visual Impact',
          },
          {
            value_id: '3b4f86f8-9966-4d50-868c-70405f781407',
            value_name: 'Affordability',
          },
        ],
      },
      {
        subject_id: '342476a8-5b64-4d66-9818-5f244a4856f8',
        subject_name: 'How was driving the new Mustang?',
        values: [
          {value_id: '0', value_name: '1 star'},
          {value_id: '1', value_name: '2 stars'},
          {value_id: '2', value_name: '3 stars'},
          {value_id: '3', value_name: '4 stars'},
          {value_id: '4', value_name: '5 stars'},
        ],
      },
      {
        subject_id: '305d906b-f187-425e-b12f-a57180d0ca76',
        subject_name: 'How do you feel about buying a new car?',
        values: [
          {value_id: '0', value_name: 'No'},
          {value_id: '1', value_name: 'Yes'},
        ],
      },
      {
        subject_id: 'cf15e87b-5bad-442b-8364-c36cd255792c',
        subject_name: 'How much do you like Labradors?',
        values: [
          {value_id: '0', value_name: '1 star'},
          {value_id: '1', value_name: '2 stars'},
          {value_id: '2', value_name: '3 stars'},
          {value_id: '3', value_name: '4 stars'},
          {value_id: '4', value_name: '5 stars'},
        ],
      },
      {
        subject_id: '391241a7-6177-4f13-908c-615f539b7803',
        subject_name: "What's your favourite fruit? ",
        values: [
          {
            value_id: 'c00de1fc-b81a-4b7b-a49d-717dd2f230c7',
            value_name: 'Banana ',
          },
          {
            value_id: '81653898-b34a-4125-a906-203a138d0ba0',
            value_name: 'Apple',
          },
          {
            value_id: '73e231de-8c81-4e22-afb1-c50d0716a0fc',
            value_name: 'Oranges',
          },
          {
            value_id: '1275ec8d-7e5d-4887-a9fd-20d32a0d0e35',
            value_name: 'Passionfruit',
          },
          {
            value_id: '4ed14c59-da16-472d-8022-0885cffc9086',
            value_name: 'Strawberries',
          },
          {
            value_id: '733523f9-aa0a-4628-8bb4-7411865b924f',
            value_name: 'Pear',
          },
        ],
      },
      {
        subject_id: 'fd2c08c1-d63f-46e8-b794-b30eccbba1dc',
        subject_name: 'Which of these regions is closest to where you live?',
        values: [
          {
            value_id: 'e93a6f41-d8f8-4d45-943d-64a83ae00e97',
            value_name: 'Northland',
          },
          {
            value_id: '9305a3e1-1819-41b5-afae-bdceca02d100',
            value_name: 'Auckland',
          },
          {
            value_id: '6b759239-5360-407d-9ae4-fe0cbb85ac83',
            value_name: 'Waikato',
          },
          {
            value_id: '224d3570-babf-4078-ae51-496976480190',
            value_name: 'Bay Of Plenty',
          },
          {
            value_id: '339b8024-1d13-42c0-9edc-87fea6892ec0',
            value_name: 'Gisborne',
          },
          {
            value_id: '44da639d-c188-42bf-83eb-c6f7779fcb0a',
            value_name: "Hawke's Bay",
          },
          {
            value_id: '831cb7bf-e918-4e03-a834-5a47513599cb',
            value_name: 'Taranaki',
          },
          {
            value_id: 'ff8a8de2-4154-4892-ac0c-f70a10be1300',
            value_name: 'Manawatu-Whanganui',
          },
          {
            value_id: 'b90e73c7-49de-49c0-a20c-6d70ef55cf4d',
            value_name: 'Wellington',
          },
          {
            value_id: '83ffdb35-4563-40a3-95e1-d0a9d319e1ba',
            value_name: 'Tasman',
          },
          {
            value_id: 'fad75047-bb79-432c-8f4f-d103a609ed81',
            value_name: 'Nelson',
          },
          {
            value_id: 'd6a106dd-23d0-4b96-8b00-a703b509a9ed',
            value_name: 'Marlborough',
          },
          {
            value_id: 'c9c7d09d-a136-415c-a0e0-fab76a929766',
            value_name: 'West Coast',
          },
          {
            value_id: '998188d0-b8c5-4000-8885-5d7f71b54f17',
            value_name: 'Christchurch',
          },
          {
            value_id: '19e4e409-faf0-4216-9b70-10da4e4d28f6',
            value_name: 'Canterbury',
          },
          {
            value_id: '1141a774-14c6-430c-9694-6b96b325b909',
            value_name: 'Otago',
          },
          {
            value_id: '2e4b341b-29f4-4fc5-a437-aa6b4ce37aac',
            value_name: 'Southland',
          },
          {
            value_id: '83e168e3-ec31-44e0-a300-a401996c5476',
            value_name: 'Other',
          },
          {
            value_id: 'c4cc5d36-bef0-44f2-9aed-36e094ce4e41',
            value_name: 'I live outside of New Zealand',
          },
        ],
      },
      {
        subject_id: 'eee7e72d-9d05-4672-8783-5da283e340b1',
        subject_name: 'Which of these fruits do you like? ',
        values: [
          {
            value_id: '1b1a2f03-aaff-49f4-bc87-915a3524a90a',
            value_name: 'Bananas',
          },
          {
            value_id: '6852b018-88fd-4468-a5f1-90fcc5a40bcc',
            value_name: 'Apples',
          },
          {
            value_id: 'ac2ab321-c97e-47a4-acd7-30e3f080e9d3',
            value_name: 'Feijoa',
          },
          {
            value_id: '908ba8f1-0788-4255-9048-fc5bc4cd0907',
            value_name: 'Passionfruit',
          },
          {
            value_id: '1b0f5322-2d9f-488f-8264-93209fa5fa14',
            value_name: 'Strawberries',
          },
        ],
      },
      {
        subject_id: 'c2250bc9-c846-4102-be23-1ba31814d9a1',
        subject_name: 'Which is your ultimate favourite? ',
        values: [
          {
            value_id: 'd78bc625-f16a-4970-b62b-f54dd974e25c',
            value_name: 'Option 1',
          },
          {
            value_id: '857928cb-f1bd-4b16-900c-f2b2b5ad0036',
            value_name: 'Option 2',
          },
          {
            value_id: '1b1a2f03-aaff-49f4-bc87-915a3524a90a',
            value_name: 'Bananas',
          },
          {
            value_id: '6852b018-88fd-4468-a5f1-90fcc5a40bcc',
            value_name: 'Apples',
          },
          {
            value_id: '908ba8f1-0788-4255-9048-fc5bc4cd0907',
            value_name: 'Passionfruit',
          },
          {
            value_id: '1b0f5322-2d9f-488f-8264-93209fa5fa14',
            value_name: 'Strawberries',
          },
        ],
      },
      {
        subject_id:
          'e5eaefaa-5b24-4ed3-aec4-4a032f688b58:377cf4ee-e0fd-4ff0-a100-7b1d0f6cd182',
        subject_name:
          'Which attributes do you associate with these brands?:Volvo',
        values: [
          {
            value_id: '859cfbbc-c8be-45ef-be4a-ae90e143cac5',
            value_name: 'Safe',
          },
          {
            value_id: '88f95e5f-5737-4da0-80d9-0859be4b5c0a',
            value_name: 'Affordable',
          },
          {
            value_id: 'dcba7822-0d40-400f-84b3-ff77b99fc60b',
            value_name: 'Stylish',
          },
          {
            value_id: 'fe828b65-81fa-45e7-8f13-ec0228bf90be',
            value_name: 'Comfortable',
          },
          {
            value_id: '7316a1fe-7bd7-4f2b-8147-f2cee05baaae',
            value_name: 'Innovative',
          },
        ],
      },
      {
        subject_id:
          'e5eaefaa-5b24-4ed3-aec4-4a032f688b58:dfa6dea4-9bc3-4800-9efd-0e234f0c6ee1',
        subject_name:
          'Which attributes do you associate with these brands?:Audi',
        values: [
          {
            value_id: '859cfbbc-c8be-45ef-be4a-ae90e143cac5',
            value_name: 'Safe',
          },
          {
            value_id: '88f95e5f-5737-4da0-80d9-0859be4b5c0a',
            value_name: 'Affordable',
          },
          {
            value_id: 'dcba7822-0d40-400f-84b3-ff77b99fc60b',
            value_name: 'Stylish',
          },
          {
            value_id: 'fe828b65-81fa-45e7-8f13-ec0228bf90be',
            value_name: 'Comfortable',
          },
          {
            value_id: '7316a1fe-7bd7-4f2b-8147-f2cee05baaae',
            value_name: 'Innovative',
          },
        ],
      },
      {
        subject_id:
          'e5eaefaa-5b24-4ed3-aec4-4a032f688b58:f394f8bd-467f-4ba3-903b-8cb99cb007f5',
        subject_name:
          'Which attributes do you associate with these brands?:Toyota',
        values: [
          {
            value_id: '859cfbbc-c8be-45ef-be4a-ae90e143cac5',
            value_name: 'Safe',
          },
          {
            value_id: '88f95e5f-5737-4da0-80d9-0859be4b5c0a',
            value_name: 'Affordable',
          },
          {
            value_id: 'dcba7822-0d40-400f-84b3-ff77b99fc60b',
            value_name: 'Stylish',
          },
          {
            value_id: 'fe828b65-81fa-45e7-8f13-ec0228bf90be',
            value_name: 'Comfortable',
          },
          {
            value_id: '7316a1fe-7bd7-4f2b-8147-f2cee05baaae',
            value_name: 'Innovative',
          },
        ],
      },
      {
        subject_id:
          '0a0cc9d7-f1df-4088-a069-2771e357e58e:44e1a54a-03ac-4f40-b37a-1c0830508660',
        subject_name: 'New accordion question:Option 1',
        values: [
          {value_id: 0, value_name: 'Strongly Agree'},
          {value_id: 1, value_name: 'Agree'},
          {value_id: 2, value_name: 'Neutral'},
          {value_id: 3, value_name: 'Disagree'},
          {value_id: 4, value_name: 'Strongly Disagree'},
        ],
      },
      {
        subject_id:
          '0a0cc9d7-f1df-4088-a069-2771e357e58e:cceba864-2283-428e-81e0-794472d528f5',
        subject_name: 'New accordion question:Option 2',
        values: [
          {value_id: 0, value_name: 'Strongly Agree'},
          {value_id: 1, value_name: 'Agree'},
          {value_id: 2, value_name: 'Neutral'},
          {value_id: 3, value_name: 'Disagree'},
          {value_id: 4, value_name: 'Strongly Disagree'},
        ],
      },
      {
        subject_id:
          'b466f3a1-1e42-4828-8f7b-c45720672293:9ca9bb02-f7d1-4558-aaa0-1ce20a408e95',
        subject_name:
          'How much do you agree or disagree that...:Black Mustangs are the fastest',
        values: [
          {value_id: 0, value_name: 'Strongly Agree'},
          {value_id: 1, value_name: 'Agree'},
          {value_id: 2, value_name: 'Neutral'},
          {value_id: 3, value_name: 'Disagree'},
          {value_id: 4, value_name: 'Strongly Disagree'},
        ],
      },
      {
        subject_id:
          'b466f3a1-1e42-4828-8f7b-c45720672293:7fe14e60-6fd5-4b25-a2e7-c574c3086427',
        subject_name:
          'How much do you agree or disagree that...:Mustangs are only for girls',
        values: [
          {value_id: 0, value_name: 'Strongly Agree'},
          {value_id: 1, value_name: 'Agree'},
          {value_id: 2, value_name: 'Neutral'},
          {value_id: 3, value_name: 'Disagree'},
          {value_id: 4, value_name: 'Strongly Disagree'},
        ],
      },
      {
        subject_id:
          'b466f3a1-1e42-4828-8f7b-c45720672293:a0c2c73c-c9c7-4c1a-9abe-d8a649b75a58',
        subject_name:
          'How much do you agree or disagree that...:Holden would do a better Mustang',
        values: [
          {value_id: 0, value_name: 'Strongly Agree'},
          {value_id: 1, value_name: 'Agree'},
          {value_id: 2, value_name: 'Neutral'},
          {value_id: 3, value_name: 'Disagree'},
          {value_id: 4, value_name: 'Strongly Disagree'},
        ],
      },
      {
        subject_id:
          'be509e31-7c98-4961-bcb8-f48fd8cd3228:8a95e804-640e-4436-9b0f-9ad549d57411',
        subject_name:
          'How do you feel about these features of the new mustang?:Heated & cooling leather seats',
        values: [
          {value_id: 0, value_name: 10},
          {value_id: 1, value_name: 9},
          {value_id: 2, value_name: 8},
          {value_id: 3, value_name: 7},
          {value_id: 4, value_name: 6},
          {value_id: 5, value_name: 5},
          {value_id: 6, value_name: 4},
          {value_id: 7, value_name: 3},
          {value_id: 8, value_name: 2},
          {value_id: 9, value_name: 1},
        ],
      },
      {
        subject_id:
          'be509e31-7c98-4961-bcb8-f48fd8cd3228:8648b2cc-1fa6-49d9-aae1-cd1c61a0de0b',
        subject_name:
          'How do you feel about these features of the new mustang?:Customised car horn',
        values: [
          {value_id: 0, value_name: 10},
          {value_id: 1, value_name: 9},
          {value_id: 2, value_name: 8},
          {value_id: 3, value_name: 7},
          {value_id: 4, value_name: 6},
          {value_id: 5, value_name: 5},
          {value_id: 6, value_name: 4},
          {value_id: 7, value_name: 3},
          {value_id: 8, value_name: 2},
          {value_id: 9, value_name: 1},
        ],
      },
      {
        subject_id:
          'be509e31-7c98-4961-bcb8-f48fd8cd3228:0fd2a231-dd10-4405-8820-edca310ead82',
        subject_name:
          'How do you feel about these features of the new mustang?:Apple Car Play',
        values: [
          {value_id: 0, value_name: 10},
          {value_id: 1, value_name: 9},
          {value_id: 2, value_name: 8},
          {value_id: 3, value_name: 7},
          {value_id: 4, value_name: 6},
          {value_id: 5, value_name: 5},
          {value_id: 6, value_name: 4},
          {value_id: 7, value_name: 3},
          {value_id: 8, value_name: 2},
          {value_id: 9, value_name: 1},
        ],
      },
      {
        subject_id:
          '290dd855-f830-490f-b7ef-88072b4c303f:87d443a8-7871-4c12-959a-65e30c627150',
        subject_name: 'New accordion question:Option 1',
        values: [
          {value_id: 0, value_name: 'Strongly Agree'},
          {value_id: 1, value_name: 'Agree'},
          {value_id: 2, value_name: 'Neutral'},
          {value_id: 3, value_name: 'Disagree'},
          {value_id: 4, value_name: 'Strongly Disagree'},
        ],
      },
      {
        subject_id:
          '290dd855-f830-490f-b7ef-88072b4c303f:4fdd3564-254f-4def-a644-a183e3e19f4c',
        subject_name: 'New accordion question:Option 2',
        values: [
          {value_id: 0, value_name: 'Strongly Agree'},
          {value_id: 1, value_name: 'Agree'},
          {value_id: 2, value_name: 'Neutral'},
          {value_id: 3, value_name: 'Disagree'},
          {value_id: 4, value_name: 'Strongly Disagree'},
        ],
      },
      {
        subject_id:
          'fd190c9d-d1f5-4f47-b17c-ef03d69f7577:0ca1a88d-4eff-4b50-81b0-01e09a90d181',
        subject_name: 'New accordion question:Option 1',
        values: [
          {value_id: 0, value_name: 'Strongly Agree'},
          {value_id: 1, value_name: 'Agree'},
          {value_id: 2, value_name: 'Neutral'},
          {value_id: 3, value_name: 'Disagree'},
          {value_id: 4, value_name: 'Strongly Disagree'},
        ],
      },
      {
        subject_id:
          'fd190c9d-d1f5-4f47-b17c-ef03d69f7577:a2168848-72ca-4aed-88b8-a9928e636777',
        subject_name: 'New accordion question:Option 2',
        values: [
          {value_id: 0, value_name: 'Strongly Agree'},
          {value_id: 1, value_name: 'Agree'},
          {value_id: 2, value_name: 'Neutral'},
          {value_id: 3, value_name: 'Disagree'},
          {value_id: 4, value_name: 'Strongly Disagree'},
        ],
      },
      {
        subject_id:
          'b3e5e987-52f7-4f13-96fd-34d895e24a47:60a9dafc-dabb-440f-ab51-df6e2f7be448',
        subject_name:
          'How much value for money do these brands offer?:Option 1',
        values: [
          {
            value_id: '7094bc30-87f3-4e04-8a90-0af36613823e',
            value_name: 'A lot',
          },
          {
            value_id: 'ae7129ea-7ce0-4f4a-92ec-6147d6c3fbab',
            value_name: 'A little',
          },
          {
            value_id: '2f0e09e8-520f-4837-8feb-d245ed00bda5',
            value_name: "They don't",
          },
        ],
      },
      {
        subject_id:
          'b3e5e987-52f7-4f13-96fd-34d895e24a47:39de99f4-d7a6-4f49-9e5e-0801eb3e0acb',
        subject_name:
          'How much value for money do these brands offer?:Aston Martin',
        values: [
          {
            value_id: '7094bc30-87f3-4e04-8a90-0af36613823e',
            value_name: 'A lot',
          },
          {
            value_id: 'ae7129ea-7ce0-4f4a-92ec-6147d6c3fbab',
            value_name: 'A little',
          },
          {
            value_id: '2f0e09e8-520f-4837-8feb-d245ed00bda5',
            value_name: "They don't",
          },
        ],
      },
      {
        subject_id:
          'b3e5e987-52f7-4f13-96fd-34d895e24a47:af73450d-4445-4702-a00f-e52e5f74e9cc',
        subject_name:
          'How much value for money do these brands offer?:Chevrolet',
        values: [
          {
            value_id: '7094bc30-87f3-4e04-8a90-0af36613823e',
            value_name: 'A lot',
          },
          {
            value_id: 'ae7129ea-7ce0-4f4a-92ec-6147d6c3fbab',
            value_name: 'A little',
          },
          {
            value_id: '2f0e09e8-520f-4837-8feb-d245ed00bda5',
            value_name: "They don't",
          },
        ],
      },
      {
        subject_id:
          'b3e5e987-52f7-4f13-96fd-34d895e24a47:564a2f93-a740-4713-ac0f-156b0d639b04',
        subject_name:
          'How much value for money do these brands offer?:Corvette',
        values: [
          {
            value_id: '7094bc30-87f3-4e04-8a90-0af36613823e',
            value_name: 'A lot',
          },
          {
            value_id: 'ae7129ea-7ce0-4f4a-92ec-6147d6c3fbab',
            value_name: 'A little',
          },
          {
            value_id: '2f0e09e8-520f-4837-8feb-d245ed00bda5',
            value_name: "They don't",
          },
        ],
      },
      {
        subject_id:
          'b3e5e987-52f7-4f13-96fd-34d895e24a47:e94dcfcc-72db-4619-bb9e-2a643b07cece',
        subject_name: 'How much value for money do these brands offer?:Tesla',
        values: [
          {
            value_id: '7094bc30-87f3-4e04-8a90-0af36613823e',
            value_name: 'A lot',
          },
          {
            value_id: 'ae7129ea-7ce0-4f4a-92ec-6147d6c3fbab',
            value_name: 'A little',
          },
          {
            value_id: '2f0e09e8-520f-4837-8feb-d245ed00bda5',
            value_name: "They don't",
          },
        ],
      },
      {
        subject_id:
          'b3e5e987-52f7-4f13-96fd-34d895e24a47:7e332cd3-360f-4518-86a1-103966e27733',
        subject_name: 'How much value for money do these brands offer?:Ferrari',
        values: [
          {
            value_id: '7094bc30-87f3-4e04-8a90-0af36613823e',
            value_name: 'A lot',
          },
          {
            value_id: 'ae7129ea-7ce0-4f4a-92ec-6147d6c3fbab',
            value_name: 'A little',
          },
          {
            value_id: '2f0e09e8-520f-4837-8feb-d245ed00bda5',
            value_name: "They don't",
          },
        ],
      },
      {
        subject_id:
          '9451e880-072a-479f-8d66-adac42998ad4:4f4e2067-85f3-41c8-96b9-ff9a052c4307',
        subject_name: 'What colour do you want this car in?:Option 1',
        values: [
          {
            value_id: '67cbb036-f872-422e-b78f-722778170bc8',
            value_name: 'Blue',
          },
          {
            value_id: 'd550c70e-4196-40ce-a10d-5880da29244d',
            value_name: 'Orange',
          },
          {value_id: 'b4c990ed-cf6c-4e36-8ebd-3c1340f00d5b', value_name: 'Red'},
        ],
      },
      {
        subject_id:
          '9451e880-072a-479f-8d66-adac42998ad4:f1ea9250-2a10-4e9d-ae6e-90defed67533',
        subject_name: 'What colour do you want this car in?:Tesla',
        values: [
          {
            value_id: '67cbb036-f872-422e-b78f-722778170bc8',
            value_name: 'Blue',
          },
          {
            value_id: 'd550c70e-4196-40ce-a10d-5880da29244d',
            value_name: 'Orange',
          },
          {value_id: 'b4c990ed-cf6c-4e36-8ebd-3c1340f00d5b', value_name: 'Red'},
        ],
      },
      {
        subject_id:
          '9451e880-072a-479f-8d66-adac42998ad4:3d13ba13-d562-4ba7-8f0a-debb02b6086f',
        subject_name: 'What colour do you want this car in?:Range Rover',
        values: [
          {
            value_id: '67cbb036-f872-422e-b78f-722778170bc8',
            value_name: 'Blue',
          },
          {
            value_id: 'd550c70e-4196-40ce-a10d-5880da29244d',
            value_name: 'Orange',
          },
          {value_id: 'b4c990ed-cf6c-4e36-8ebd-3c1340f00d5b', value_name: 'Red'},
        ],
      },
      {
        subject_id:
          '9451e880-072a-479f-8d66-adac42998ad4:c0faca49-cda0-45a5-8f21-327cbb8be6da',
        subject_name: 'What colour do you want this car in?:Mazda',
        values: [
          {
            value_id: '67cbb036-f872-422e-b78f-722778170bc8',
            value_name: 'Blue',
          },
          {
            value_id: 'd550c70e-4196-40ce-a10d-5880da29244d',
            value_name: 'Orange',
          },
          {value_id: 'b4c990ed-cf6c-4e36-8ebd-3c1340f00d5b', value_name: 'Red'},
        ],
      },
      {
        subject_id:
          'bff00f81-32ff-4c3a-8e3b-1ec85250c4d3:9f67fc76-4540-4617-bb0f-4d0b4c4fd62c',
        subject_name:
          'How important are each of these features to you?:Fluffy Dice',
        values: [
          {value_id: 0, value_name: 'Very important'},
          {value_id: 1, value_name: 'Important'},
          {value_id: 2, value_name: 'Neutral'},
          {value_id: 3, value_name: 'Unimportant'},
          {value_id: 4, value_name: 'Not at all important'},
        ],
      },
      {
        subject_id:
          'bff00f81-32ff-4c3a-8e3b-1ec85250c4d3:1b05e334-8504-4cc0-88fa-59f71ec0736e',
        subject_name:
          'How important are each of these features to you?:Leather Seats',
        values: [
          {value_id: 0, value_name: 'Very important'},
          {value_id: 1, value_name: 'Important'},
          {value_id: 2, value_name: 'Neutral'},
          {value_id: 3, value_name: 'Unimportant'},
          {value_id: 4, value_name: 'Not at all important'},
        ],
      },
      {
        subject_id:
          'bff00f81-32ff-4c3a-8e3b-1ec85250c4d3:d5206809-e236-4ca6-8158-75c7fa6910bb',
        subject_name:
          'How important are each of these features to you?:7 seats',
        values: [
          {value_id: 0, value_name: 'Very important'},
          {value_id: 1, value_name: 'Important'},
          {value_id: 2, value_name: 'Neutral'},
          {value_id: 3, value_name: 'Unimportant'},
          {value_id: 4, value_name: 'Not at all important'},
        ],
      },
      {
        subject_id:
          'f80adeab-70d0-4c7a-9d80-10fe6ac0ba69:b22ef978-a040-46de-8f04-d4f900336b0b',
        subject_name:
          'How appealing are the below ideas for a business support product? :All my business needs in one place ',
        values: [
          {value_id: 0, value_name: 'Strongly Agree'},
          {value_id: 1, value_name: 'Agree'},
          {value_id: 2, value_name: 'Neutral'},
          {value_id: 3, value_name: 'Disagree'},
          {value_id: 4, value_name: 'Strongly Disagree'},
        ],
      },
      {
        subject_id:
          'f80adeab-70d0-4c7a-9d80-10fe6ac0ba69:376decd4-e477-49f9-af65-da30f5589970',
        subject_name:
          'How appealing are the below ideas for a business support product? :A single bill for all my admin tech ',
        values: [
          {value_id: 0, value_name: 'Strongly Agree'},
          {value_id: 1, value_name: 'Agree'},
          {value_id: 2, value_name: 'Neutral'},
          {value_id: 3, value_name: 'Disagree'},
          {value_id: 4, value_name: 'Strongly Disagree'},
        ],
      },
      {
        subject_id:
          '562d130d-fdd3-4cda-a24a-d628cdfddb4d:fd5a571e-1b1b-4c07-9020-9743edd1cad2',
        subject_name: 'New accordion question:Option 1',
        values: [
          {value_id: 0, value_name: 'Strongly Agree'},
          {value_id: 1, value_name: 'Agree'},
          {value_id: 2, value_name: 'Neutral'},
          {value_id: 3, value_name: 'Disagree'},
          {value_id: 4, value_name: 'Strongly Disagree'},
        ],
      },
      {
        subject_id:
          '562d130d-fdd3-4cda-a24a-d628cdfddb4d:6332bec4-c260-456a-a1e6-2a9a0b8da7d9',
        subject_name: 'New accordion question:Option 2',
        values: [
          {value_id: 0, value_name: 'Strongly Agree'},
          {value_id: 1, value_name: 'Agree'},
          {value_id: 2, value_name: 'Neutral'},
          {value_id: 3, value_name: 'Disagree'},
          {value_id: 4, value_name: 'Strongly Disagree'},
        ],
      },
    ],
  },
]
