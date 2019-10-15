import { Component, ViewChild, TemplateRef } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

const countries = [
  {
    "col1": "eu",
    "col2": "anim",
    "col3": "minim",
    "col4": "laboris",
    "col5": "mollit",
    "col6": "irure",
    "col7": "ullamco",
    "col8": "officia",
    "col9": "velit",
    "col10": "labore",
    "col11": "deserunt",
    "col12": "elit",
    "col13": "fugiat",
    "col14": "duis",
    "col15": "nisi"
  },
  {
    "col1": "elit",
    "col2": "dolor",
    "col3": "fugiat",
    "col4": "ipsum",
    "col5": "ipsum",
    "col6": "laborum",
    "col7": "esse",
    "col8": "ut",
    "col9": "do",
    "col10": "qui",
    "col11": "in",
    "col12": "commodo",
    "col13": "culpa",
    "col14": "elit",
    "col15": "esse"
  },
  {
    "col1": "qui",
    "col2": "deserunt",
    "col3": "sunt",
    "col4": "voluptate",
    "col5": "excepteur",
    "col6": "proident",
    "col7": "proident",
    "col8": "excepteur",
    "col9": "cupidatat",
    "col10": "elit",
    "col11": "esse",
    "col12": "eiusmod",
    "col13": "veniam",
    "col14": "nulla",
    "col15": "minim"
  },
  {
    "col1": "cillum",
    "col2": "dolor",
    "col3": "esse",
    "col4": "pariatur",
    "col5": "laborum",
    "col6": "eu",
    "col7": "pariatur",
    "col8": "anim",
    "col9": "Lorem",
    "col10": "aliquip",
    "col11": "ut",
    "col12": "esse",
    "col13": "occaecat",
    "col14": "incididunt",
    "col15": "aliqua"
  },
  {
    "col1": "duis",
    "col2": "proident",
    "col3": "sunt",
    "col4": "proident",
    "col5": "tempor",
    "col6": "dolore",
    "col7": "aute",
    "col8": "voluptate",
    "col9": "amet",
    "col10": "exercitation",
    "col11": "pariatur",
    "col12": "nostrud",
    "col13": "reprehenderit",
    "col14": "ea",
    "col15": "dolore"
  },
  {
    "col1": "veniam",
    "col2": "ullamco",
    "col3": "ea",
    "col4": "eu",
    "col5": "tempor",
    "col6": "occaecat",
    "col7": "adipisicing",
    "col8": "magna",
    "col9": "nisi",
    "col10": "Lorem",
    "col11": "adipisicing",
    "col12": "sit",
    "col13": "irure",
    "col14": "aute",
    "col15": "dolore"
  },
  {
    "col1": "ipsum",
    "col2": "deserunt",
    "col3": "officia",
    "col4": "enim",
    "col5": "nisi",
    "col6": "minim",
    "col7": "Lorem",
    "col8": "cupidatat",
    "col9": "et",
    "col10": "minim",
    "col11": "fugiat",
    "col12": "eiusmod",
    "col13": "ea",
    "col14": "mollit",
    "col15": "ullamco"
  },
  {
    "col1": "cupidatat",
    "col2": "sit",
    "col3": "adipisicing",
    "col4": "cillum",
    "col5": "anim",
    "col6": "reprehenderit",
    "col7": "in",
    "col8": "labore",
    "col9": "pariatur",
    "col10": "aliqua",
    "col11": "laborum",
    "col12": "dolore",
    "col13": "ad",
    "col14": "ea",
    "col15": "id"
  },
  {
    "col1": "exercitation",
    "col2": "esse",
    "col3": "aute",
    "col4": "Lorem",
    "col5": "aliqua",
    "col6": "aliqua",
    "col7": "esse",
    "col8": "anim",
    "col9": "minim",
    "col10": "culpa",
    "col11": "proident",
    "col12": "fugiat",
    "col13": "officia",
    "col14": "cupidatat",
    "col15": "eu"
  },
  {
    "col1": "eiusmod",
    "col2": "sit",
    "col3": "esse",
    "col4": "consequat",
    "col5": "culpa",
    "col6": "occaecat",
    "col7": "laboris",
    "col8": "excepteur",
    "col9": "amet",
    "col10": "fugiat",
    "col11": "commodo",
    "col12": "amet",
    "col13": "Lorem",
    "col14": "et",
    "col15": "sint"
  },
  {
    "col1": "veniam",
    "col2": "commodo",
    "col3": "eiusmod",
    "col4": "eiusmod",
    "col5": "ipsum",
    "col6": "eu",
    "col7": "ad",
    "col8": "nisi",
    "col9": "non",
    "col10": "irure",
    "col11": "aute",
    "col12": "officia",
    "col13": "quis",
    "col14": "ipsum",
    "col15": "voluptate"
  },
  {
    "col1": "et",
    "col2": "enim",
    "col3": "non",
    "col4": "et",
    "col5": "ut",
    "col6": "Lorem",
    "col7": "ad",
    "col8": "ad",
    "col9": "occaecat",
    "col10": "nisi",
    "col11": "ut",
    "col12": "voluptate",
    "col13": "et",
    "col14": "quis",
    "col15": "excepteur"
  },
  {
    "col1": "ea",
    "col2": "in",
    "col3": "deserunt",
    "col4": "irure",
    "col5": "anim",
    "col6": "occaecat",
    "col7": "pariatur",
    "col8": "ea",
    "col9": "Lorem",
    "col10": "dolore",
    "col11": "irure",
    "col12": "magna",
    "col13": "cupidatat",
    "col14": "nisi",
    "col15": "sit"
  },
  {
    "col1": "id",
    "col2": "voluptate",
    "col3": "deserunt",
    "col4": "ex",
    "col5": "laboris",
    "col6": "sit",
    "col7": "dolore",
    "col8": "dolore",
    "col9": "magna",
    "col10": "commodo",
    "col11": "cillum",
    "col12": "deserunt",
    "col13": "amet",
    "col14": "labore",
    "col15": "cupidatat"
  },
  {
    "col1": "labore",
    "col2": "pariatur",
    "col3": "proident",
    "col4": "pariatur",
    "col5": "occaecat",
    "col6": "id",
    "col7": "adipisicing",
    "col8": "aliqua",
    "col9": "consectetur",
    "col10": "Lorem",
    "col11": "mollit",
    "col12": "aliqua",
    "col13": "duis",
    "col14": "nisi",
    "col15": "est"
  },
  {
    "col1": "excepteur",
    "col2": "veniam",
    "col3": "dolore",
    "col4": "nulla",
    "col5": "aute",
    "col6": "in",
    "col7": "sint",
    "col8": "quis",
    "col9": "amet",
    "col10": "consequat",
    "col11": "laborum",
    "col12": "laborum",
    "col13": "incididunt",
    "col14": "sunt",
    "col15": "minim"
  },
  {
    "col1": "dolor",
    "col2": "magna",
    "col3": "ut",
    "col4": "magna",
    "col5": "aliquip",
    "col6": "aute",
    "col7": "dolore",
    "col8": "culpa",
    "col9": "adipisicing",
    "col10": "ipsum",
    "col11": "mollit",
    "col12": "commodo",
    "col13": "dolor",
    "col14": "Lorem",
    "col15": "excepteur"
  },
  {
    "col1": "qui",
    "col2": "id",
    "col3": "ex",
    "col4": "reprehenderit",
    "col5": "adipisicing",
    "col6": "Lorem",
    "col7": "culpa",
    "col8": "reprehenderit",
    "col9": "mollit",
    "col10": "ad",
    "col11": "ullamco",
    "col12": "cillum",
    "col13": "laboris",
    "col14": "quis",
    "col15": "culpa"
  },
  {
    "col1": "mollit",
    "col2": "mollit",
    "col3": "commodo",
    "col4": "eiusmod",
    "col5": "est",
    "col6": "nulla",
    "col7": "consequat",
    "col8": "excepteur",
    "col9": "anim",
    "col10": "aliquip",
    "col11": "amet",
    "col12": "do",
    "col13": "sunt",
    "col14": "aliquip",
    "col15": "dolor"
  },
  {
    "col1": "excepteur",
    "col2": "laborum",
    "col3": "aliquip",
    "col4": "non",
    "col5": "eu",
    "col6": "in",
    "col7": "elit",
    "col8": "consequat",
    "col9": "nulla",
    "col10": "ipsum",
    "col11": "sunt",
    "col12": "minim",
    "col13": "ex",
    "col14": "anim",
    "col15": "laboris"
  },
  {
    "col1": "dolore",
    "col2": "id",
    "col3": "laboris",
    "col4": "magna",
    "col5": "cupidatat",
    "col6": "eiusmod",
    "col7": "consectetur",
    "col8": "tempor",
    "col9": "veniam",
    "col10": "aliqua",
    "col11": "ex",
    "col12": "nostrud",
    "col13": "sint",
    "col14": "sunt",
    "col15": "culpa"
  },
  {
    "col1": "sint",
    "col2": "cupidatat",
    "col3": "culpa",
    "col4": "aliqua",
    "col5": "nostrud",
    "col6": "nulla",
    "col7": "sint",
    "col8": "occaecat",
    "col9": "anim",
    "col10": "mollit",
    "col11": "id",
    "col12": "aute",
    "col13": "officia",
    "col14": "cillum",
    "col15": "laboris"
  },
  {
    "col1": "est",
    "col2": "exercitation",
    "col3": "fugiat",
    "col4": "fugiat",
    "col5": "velit",
    "col6": "quis",
    "col7": "eiusmod",
    "col8": "minim",
    "col9": "irure",
    "col10": "ut",
    "col11": "dolore",
    "col12": "ullamco",
    "col13": "duis",
    "col14": "qui",
    "col15": "duis"
  },
  {
    "col1": "excepteur",
    "col2": "esse",
    "col3": "mollit",
    "col4": "occaecat",
    "col5": "laboris",
    "col6": "qui",
    "col7": "elit",
    "col8": "adipisicing",
    "col9": "est",
    "col10": "proident",
    "col11": "enim",
    "col12": "consequat",
    "col13": "laboris",
    "col14": "ipsum",
    "col15": "occaecat"
  },
  {
    "col1": "proident",
    "col2": "dolore",
    "col3": "amet",
    "col4": "proident",
    "col5": "cupidatat",
    "col6": "sit",
    "col7": "elit",
    "col8": "eiusmod",
    "col9": "minim",
    "col10": "deserunt",
    "col11": "incididunt",
    "col12": "sint",
    "col13": "ea",
    "col14": "adipisicing",
    "col15": "non"
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedIndex: number = 0;
  tabs: any[] = [
        {
            index: 0,
            name: 'tab1 content',
        },
        {
            index: 1,
            name: 'tab2 content',
        },
  ]
  
  gridOptions: GridOptions = {
    rowData: countries,
        columnDefs: [
            {
              headerName: 'Col 1',
              field: 'col1'
            }, {
              headerName: 'Col 2',
              field: 'col2'
            }, {
              headerName: 'Col 3',
              field: 'col3'
            }, {
              headerName: 'Col 4',
              field: 'col4'
            }, {
              headerName: 'Col 5',
              field: 'col5'
            }, {
              headerName: 'Col 6',
              field: 'col6'
            }, {
              headerName: 'Col 7',
              field: 'col7'
            }, {
              headerName: 'Col 8',
              field: 'col8'
            }, {
              headerName: 'Col 9',
              field: 'col9'
            }, {
              headerName: 'Col 10',
              field: 'col10'
            }, {
              headerName: 'Col 10',
              field: 'col11'
            }, {
              headerName: 'Col 12',
              field: 'col12'
            }, {
              headerName: 'Col 13',
              field: 'col13'
            }, {
              headerName: 'Col 14',
              field: 'col14'
            }, {
              headerName: 'Col 15',
              field: 'col15'
            }
          ]
  }

  onTabChange(tabId: number){
      this.selectedIndex = tabId;
  }
}
