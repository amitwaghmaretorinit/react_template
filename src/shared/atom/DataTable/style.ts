import styled from "styled-components";
import '@constant/spacing/Spacing.css'
import '@constant/color/Color.css'



export const LoadMoreContainer=styled.div`
display: flex;
justify-content: center;
width: 96% ;
position: absolute;
background-color: white;
bottom: 0;
opacity: 0.8;
padding-top:16px;
 `



export const LoadMoreContainerList=styled.div`
display: flex;
justify-content: center;
position: absolute;
background-color: white;
bottom: 0;
opacity: 0.8;
padding-top:16px;
margin-top:-50px;
width:96%
 `


export const TableContainer = styled.div`
position: relative;
width:100%;

.ant-table-empty .ant-table-placeholder{
display:none;
}
  ${(props: { showCustomEmpty: boolean }) => {
    return (
      props.showCustomEmpty &&
      `
        position: relative;

.ant-empty-image{
    display:none;
}
.ant-empty-description{
    display:none;
}
`
  );
}}
  

`;

export const EmptyContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;



export const Wrapper = styled.div`
.ant-table-cell{
  text-align: left;
}
.amendedRow {
    border: 1px solid #1890FF;
    background-color: #F0F5FF;
}

.dealDashboardRow {
    cursor: pointer;
}

width:100%;
max-width:100%;

 &.fixTD .ant-table-thead > tr > th {
   min-width:150px;
   width:150px;
 }
 &.fixTD .ant-table-tbody > tr > td{
   min-width:150px;
   width:150px;
 }
 
 &.fixTD .ant-table {
   width: 100%;
 }
.ant-table {
  border-radius:var(--spacing-2);
}
.ant-table-container table > thead > tr:first-child th:first-child {
  border-top-left-radius: var(--spacing-2);
}
.ant-table table{
  width:100%!important;
max-width:100% !important;
table-layout: unset !important;
}
.ant-table-cell-scrollbar{
  display:none;
}

   .ant-table-thead > tr > th{
  background:var(--color-system-gray-gray-1);
  }
  

  .ant-table-tbody > tr > td:last-child{
    width:60px;
  }
  .ant-table-tbody > tr > td {
    gap:10px;
     transition: background 0.3s;
     max-width:150px;
     width:150px;
  
    
   }
 .ant-table-cell.ant-table-cell-scrollbar{
   display:none;
 }
  
  table tr td.ant-table-selection-column {

    text-align: center;
   
  }
  .ant-table-thead > tr > th {
    color: rgba(23, 8, 45, 1);
    font-weight: 600;
    font-family: Poppins;
    gap:8px;
    border-bottom: 4px solid var(--color-system-gray-gray-5);
  }
  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    background-color: transparent;
  }
  .ant-table-tbody > tr > td {
    font-size: 14px;
    line-height: 20px;
    color: var(--color-system-gray-gray-10);
    font-family: Poppins;
    padding: 8px 16px;
    font-weight:400;
  }
 
  
  .ant-table-thead th.ant-table-column-has-sorters:hover {
    background: #e2e6ee;
  }
  .ant-table-column-sorters {
    justify-content: flex-start;
  }
  .ant-table-column-sorter {
    color: rgba(23, 8, 45, 1);
    justify-content: flex-start;
  }
  .ant-table-column-title {
    flex: initial;
    margin-right: 9px;
    font-size:14px;
    color: var(--color-system-gray-gray-10);
    font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: left;
  }
 
.NameTitle{
    font-weight:400;
    display: block;
}
.ant-table-body{

  &::-webkit-scrollbar {
  width: 4px;
   height:4px;
}
&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(226, 226, 238, 1);
  border-radius: 10px;
}


&::-webkit-scrollbar-thumb {
  background: rgba(151, 146, 227, 1);
  border-radius: 10px;
}


&::-webkit-scrollbar-thumb:hover {
  background: rgba(151, 146, 227, 1);
}
}
.ant-table-cell-scrollbar{
  box-shadow:none;
      
}
.ant-table-body{
  overflow-y: auto !important;
}
.ant-table-thead th.ant-table-column-has-sorters {
  transition: none !important;
}

&.fixTD .ant-table-thead > tr > th {
  min-width:150px;
  width:150px;
}
&.fixTD .ant-table-tbody > tr > td{
  min-width:150px;
  width:150px;
}

&.fixTD .ant-table {
  width: 100%;
}

&.fixTD .ant-table-tbody > tr >  td.ant-table-selection-column{
  text-align: left;
  padding-left: 16px;
  padding-right:16px;
}
&.fixTD .ant-table-thead > tr > th.ant-table-selection-column{
  text-align: left;
  padding-left: 16px;
  padding-right:16px;
}
${(props: { isData: boolean }) => {
  return (
    props.isData &&
    `
    .ant-table-body{
      min-height:200px;
    }
     `
  );
}}
`;



