import{j as a}from"./index-CTAXdLKx.js";import{r as w}from"./index-D5jfS-9e.js";import{c as m,d as h,S as v,P as Ce,D as Se,e as te,Q as ne,i as rn,f as ve,g as ln,G as sn,W as dn,O as un,C as cn,a as be,T as xe,U as pn,h as mn,j as hn}from"./useClipboard-DlMSyH3Y.js";import"./client-Spw3EFno.js";import{m as gn,a as fn,e as wn,b as yn,c as Cn}from"./data-P27TVG1u.js";const Sn=[40,80,120,200],se=y=>{var me,he,ge,fe,we,ye;const{enableRtl:ae,enableRipple:Ke,localDataCount:G,isTextWrapData:de,isDialogInsideGrid:ue,isStrictMode:$e,isMultipleChildren:Je,parentContainerHeight:Xe="93vh",isCustomBinding:R,serverPageSize:B,defaultOpenGroupExpandKeys:A,isConditionalRowSelection:ce,...n}=y;((ge=(he=n.columns)==null?void 0:he[((me=n.columns)==null?void 0:me.length)-1])==null?void 0:ge.headerText)==="Command Actions"&&(n.columns[((fe=n.columns)==null?void 0:fe.length)-1].getCommandItems=()=>[a.jsx(m,{type:h.Edit},"Edit"),a.jsx(m,{type:h.Delete},"Delete"),a.jsx(m,{type:h.Update},"Update"),a.jsx(m,{type:h.Cancel},"Cancel")]);const c=w.useRef(null),oe=w.useRef(null),[re,Ye]=w.useState(!0),[b,Ze]=w.useState(!1),C=w.useMemo(()=>de?gn(G):fn(G,n.columns),[G,(we=n.columns)==null?void 0:we.length]),[en,nn]=w.useState({result:[],count:0,hasMore:((ye=y.virtualizationSettings)==null?void 0:ye.scrollMode)===v.Infinite}),le=w.useCallback(e=>{if(!e.isComplex)return new Ce(e.field,e.operator,e.value,e.ignoreCase,e.ignoreAccent,e.matchCase);let t=null;const o=e.predicates||[],s=e.condition||"and";for(let d=0;d<o.length;d++){const i=le(e.predicates[d]);t===null?t=i:t=s.toLowerCase()==="or"?t.or(i):t.and(i)}return t||new Ce("","","")},[]),pe=e=>{var s,d,i,u,S,g,x,k,M,q,I,F,V,z,O,D,j,E,U,T,W,L,Q;const t=new te(C),o=new ne;if((s=e.where)!=null&&s.length){const r=e.where[0],l=le(r);o.where(l)}if((d=e.search)!=null&&d.length){const{fields:r,value:l}=e.search[0];o.search(l,r)}if((i=e.sort)!=null&&i.length||(u=e.groups)!=null&&u.length&&e.isInitialLoad)if(e.isInitialLoad&&((S=e.groups)!=null&&S.length)){const r=[];for(let l=e.sort.length-1;l>-1;l--)(r==null?void 0:r.find(p=>p.field===e.sort[l].field))||((g=e.groups)!=null&&g.length&&((x=e.groups)!=null&&x.includes(e.sort[l].field))?r.push({field:e.sort[l].field,direction:e.sort[l].direction}):o.sortBy(e.sort[l].field,e.sort[l].direction));r.length&&r.forEach(l=>{o.sortBy(l.field,l.direction)})}else e.sort.forEach(r=>{o.sortBy(r.field,r.direction)});if((k=e.aggregates)!=null&&k.length||(q=(M=c.current)==null?void 0:M.aggregates)!=null&&q.length){const r=(I=e.aggregates)!=null&&I.length?e.aggregates:(F=c.current)==null?void 0:F.aggregates;for(let l=0;l<(r==null?void 0:r.length);l++)if((V=r[l])!=null&&V.columns)for(let f=0;f<((z=r[l])==null?void 0:z.columns.length);f++){const p=r[l].columns[f];if(Array.isArray(p.type))for(let H=0;H<p.type.length;H++)o.aggregate((j=(D=(O=p.type)==null?void 0:O[H])==null?void 0:D.toLowerCase)==null?void 0:j.call(D),p.field);else o.aggregate((U=(E=p.type)==null?void 0:E.toLowerCase)==null?void 0:U.call(E),p.field)}else{const f=r[l];o.aggregate((W=(T=f.type)==null?void 0:T.toLowerCase)==null?void 0:W.call(T),f.field)}}if(e.groups&&((L=e.groups)!=null&&L.length))for(let r=0;r<e.groups.length;r++){const l=e.groups[parseInt(r.toString(),10)];o.group(l)}if(e.take&&e.skip){const r=e.skip/e.take+1,l=e.take;o.page(r,l)}else if(e.skip===0&&e.take)o.page(1,e.take);else if(!rn(e.skip)&&!e.take&&((Q=y.virtualizationSettings)==null?void 0:Q.scrollMode)===v.Infinite){const r=e.skip/B+1;o.page(r,B)}e.requiresCounts&&o.requiresCount(),t.executeQuery(o).then(r=>{if(e.requestType==="filterChoiceRequest"){const l={result:ve.distinct(r.result,e.select[0],!0),count:r.count};if(e.distinctCounts){const f=new ne;if(e.distinct){const p=e.distinct[0],H=le(p);f.where(H)}e.select&&f.select(e.select),t.executeQuery(f).then(p=>{l.distinctCount=ve.distinct(p.result,e.select[0],!0).length,e.dataSource(l)})}else e.dataSource(l)}else nn({...r,hasMore:C.length>(e.skip??0)+r.result.length})})},tn=e=>{setTimeout(()=>{if(e.action==="Add"&&C.unshift(e.data),e.action==="Edit"){for(var t=0;t<C.length;t++)if(C[t].id==e.data.id){C[t]=e.data;break}}if(e.action=="Delete"){for(var o=0;o<e.data.length;o++)for(var t=0;t<C.length;t++)if(C[t].id==e.data[o].id){C.splice(t,1);break}}e.saveDataChanges()},0)},an=w.useMemo(()=>{var s,d;if(!R)return;const e=((s=n==null?void 0:n.aggregates)==null?void 0:s.reduce((i,u)=>{var S;return(S=u.columns)==null||S.forEach(g=>{Array.isArray(g.type)?g.type.forEach(x=>{i.push({type:x.toLowerCase(),field:g.field})}):i.push({type:g.type.toLowerCase(),field:g.field})}),i},[]))??[],t=((d=n==null?void 0:n.columns)==null?void 0:d.reduce((i,u)=>(u.groupCaptionAggregateType&&i.push(...Array.isArray(u.groupCaptionAggregateType)?u.groupCaptionAggregateType.map(S=>({type:S.toLowerCase(),field:u.field})):[{type:u.groupCaptionAggregateType.toLowerCase(),field:u.field}]),i),[]))??[],o=e==null?void 0:e.concat(t);return o!=null&&o.length?o:void 0},[R,n==null?void 0:n.aggregates,n==null?void 0:n.columns,b]);w.useEffect(()=>{var e,t,o,s,d,i,u,S,g,x,k,M,q,I,F,V,z,O,D,j,E;R&&b&&pe({skip:((e=n==null?void 0:n.pageSettings)==null?void 0:e.currentPage)*((t=n==null?void 0:n.pageSettings)==null?void 0:t.pageSize)||0,...((o=n.virtualizationSettings)==null?void 0:o.scrollMode)!==v.Infinite||(s=n.pageSettings)!=null&&s.estimatedTotalRecordsCount||((d=n.pageSettings)==null?void 0:d.pageSizeControlledBy)==="client"?{take:B??((i=n==null?void 0:n.pageSettings)==null?void 0:i.pageSize)??(((u=n.virtualizationSettings)==null?void 0:u.scrollMode)===v.Auto||!((S=n.virtualizationSettings)!=null&&S.scrollMode)?12:50)}:{take:B},groups:(g=n==null?void 0:n.groupSettings)==null?void 0:g.columns,where:[],search:[],sort:(x=n==null?void 0:n.sortSettings)!=null&&x.enabled&&((M=(k=n==null?void 0:n.sortSettings)==null?void 0:k.columns)!=null&&M.length)&&(!((q=n==null?void 0:n.groupSettings)!=null&&q.enabled)||!((I=n==null?void 0:n.groupSettings)!=null&&I.columns))?(F=n==null?void 0:n.sortSettings)==null?void 0:F.columns:(((V=n==null?void 0:n.sortSettings)==null?void 0:V.columns)??[]).concat((z=n==null?void 0:n.groupSettings)!=null&&z.enabled&&((O=n==null?void 0:n.groupSettings)!=null&&O.columns)?(j=(D=n==null?void 0:n.groupSettings)==null?void 0:D.columns)==null?void 0:j.map(U=>{var T,W,L;return{field:U,direction:((L=(W=(T=n==null?void 0:n.sortSettings)==null?void 0:T.columns)==null?void 0:W.find(Q=>Q.field===U))==null?void 0:L.direction)??"Ascending"}}):[]),aggregates:an??[],...((E=n.virtualizationSettings)==null?void 0:E.scrollMode)!==v.Infinite?{requiresCounts:!0}:{},isInitialLoad:!0})},[b]);const on=w.useCallback(e=>e.id%2===0||e.EmployeeID%2===0||e.RecordId%2===0?{selectable:!1}:!0,[ce]),P=()=>{var e;return a.jsxs(a.Fragment,{children:[a.jsxs("button",{onClick:()=>{var t,o;b&&window.localStorage.removeItem((o=(t=c==null?void 0:c.current)==null?void 0:t.getDataModule())==null?void 0:o.dataManager.guidId),Ze(!b)},children:[b?"Destroy":"Render"," Data Grid"]}),G&&!de&&a.jsxs("button",{onClick:()=>Ye(!re),children:[re?"Uniform":"Non Uniform"," Row Height Applied"]}),(e=n==null?void 0:n.groupSettings)!=null&&e.enabled?a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>{var t,o,s;(s=(t=c.current)==null?void 0:t.groupColumn)==null||s.call(t,(o=n==null?void 0:n.groupSettings)==null?void 0:o.columns,!0)},children:"Reset Grouped Columns to Default"}),a.jsx("button",{onClick:()=>{var t,o,s,d,i;(i=(t=c.current)==null?void 0:t.ungroupColumn)==null||i.call(t,[(d=(s=(o=c.current)==null?void 0:o.groupSettings)==null?void 0:s.columns)==null?void 0:d[0]])},children:"Un Group First Grouped Column"}),a.jsx("button",{onClick:()=>{var t,o;(o=(t=c.current)==null?void 0:t.expandAll)==null||o.call(t)},children:"Expand All"}),a.jsx("button",{onClick:()=>{var t,o;(o=(t=c.current)==null?void 0:t.collapseAll)==null||o.call(t)},children:"Collapse All"}),a.jsx("button",{onClick:()=>{var t,o;(o=(t=c.current)==null?void 0:t.clearGrouping)==null||o.call(t)},children:"Clear Grouping"})]}):null,b&&a.jsx(ln,{dir:ae?"rtl":"ltr",ripple:Ke,locale:n.locale,children:a.jsx(sn,{ref:c,dataSource:R?en:G?C:[],onDataRequest:R?pe:void 0,onDataChangeRequest:R?tn:void 0,shouldExpandGroup:A!=null&&A.length?t=>{var o;return(o=A.includes)==null?void 0:o.call(A,t==null?void 0:t.groupKey)}:void 0,onError:t=>{console.error("Grid Error: ",t)},...n,isRowSelectable:ce?on:void 0,columns:n.children?void 0:n.columns,aggregates:n.children?void 0:n.aggregates,getRowHeight:re?null:t=>Sn[t.rowIndex%4],children:Je?n.children.props.children:n.children})}),a.jsx("button",{onClick:()=>{console.log(c)},children:"dummy navigation checking button with get GridRef"})]})};return a.jsx("div",{ref:oe,style:{height:Xe,isolation:"isolate"},children:$e?a.jsx(w.StrictMode,{children:ue?a.jsx(Se,{open:!0,fullScreen:!0,target:oe.current,children:P()}):P()}):ue?a.jsx(Se,{open:!0,fullScreen:!0,target:oe.current,children:P()}):P()})};try{se.displayName="LargeDataGridTest",se.__docgenInfo={description:"",displayName:"LargeDataGridTest",props:{parentContainerHeight:{defaultValue:null,description:"",name:"parentContainerHeight",required:!1,type:{name:"Height<string | number>"}},enableRtl:{defaultValue:null,description:`Enables right-to-left (RTL) direction for the grid.

When set to true, the grid's layout changes to support right-to-left languages like Arabic.
This includes reversing the direction of UI elements, text alignment, and scrollbars.`,name:"enableRtl",required:!1,type:{name:"boolean"}},enableRipple:{defaultValue:null,description:"",name:"enableRipple",required:!1,type:{name:"boolean"}},localDataCount:{defaultValue:null,description:"",name:"localDataCount",required:!1,type:{name:"number"}},isTextWrapData:{defaultValue:null,description:"",name:"isTextWrapData",required:!1,type:{name:"boolean"}},isDialogInsideGrid:{defaultValue:null,description:"",name:"isDialogInsideGrid",required:!1,type:{name:"boolean"}},isStrictMode:{defaultValue:null,description:"",name:"isStrictMode",required:!1,type:{name:"boolean"}},isMultipleChildren:{defaultValue:null,description:"",name:"isMultipleChildren",required:!1,type:{name:"boolean"}},isCustomBinding:{defaultValue:null,description:"",name:"isCustomBinding",required:!1,type:{name:"boolean"}},serverPageSize:{defaultValue:null,description:"",name:"serverPageSize",required:!1,type:{name:"number"}},defaultOpenGroupExpandKeys:{defaultValue:null,description:"",name:"defaultOpenGroupExpandKeys",required:!1,type:{name:"string[]"}},isConditionalRowSelection:{defaultValue:null,description:"",name:"isConditionalRowSelection",required:!1,type:{name:"boolean"}},children:{defaultValue:{value:"null"},description:`Child components for the grid.

Allows rendering of child elements within the grid component structure.
@private`,name:"children",required:!1,type:{name:"ReactElement<IRowBase<unknown>, string | JSXElementConstructor<any>> | ReactElement<IRowBase<unknown>, string | JSXElementConstructor<any>>[] | ReactNode"}},onError:{defaultValue:null,description:`Fires when grid operations like sorting or filtering fail.
Provides error details for handling and user feedback.
@event onError
@example \`\`\`tsx
const GridComponent = () => {
  const handleActionFailure = (event: Error) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onError={handleActionFailure}
    />
  );
};
\`\`\``,name:"onError",required:!1,type:{name:"(event: Error) => void"}},id:{defaultValue:{value:"React.useId()"},description:`Specifies a unique identifier for the grid component.
Provides a distinct ID for the grid instance, enabling targeted interactions, styling, or accessibility features.
Used to differentiate multiple grid instances within the same application or DOM.
@example \`\`\`tsx
<Grid
  id="employee-grid"
  dataSource={employees}
  columns={columns}
/>
\`\`\``,name:"id",required:!1,type:{name:"string"}},dataSource:{defaultValue:{value:"[]"},description:`Supplies the data to be displayed in the grid.

The data source can be provided as:
* An array of JavaScript objects
* A \`DataManager\` instance for local/remote data operations
* A \`DataResponse\` object with processed data

The grid will automatically bind to this data and render rows based on the provided records.
@example \`\`\`tsx
import React from 'react';
import { Grid } from '@company/react-grid';

const GridExample: React.FC = () => {
  // Local data array
  const employees = [
    { id: 1, name: 'John Doe', role: 'Developer', salary: 75000 },
    { id: 2, name: 'Jane Smith', role: 'Designer', salary: 65000 },
  ];

  return (
    <Grid
      dataSource={employees}
    />
  );
};
\`\`\``,name:"dataSource",required:!1,type:{name:"DataManager | DataResponse | unknown[]"}},columns:{defaultValue:{value:"[]"},description:`Defines the columns to be displayed in the grid.

An array of ColumnProps objects that specify how each column in the grid should be configured.
This includes properties like \`field\`, \`headerText\`, \`width\`, \`format\`, and more.
The order of columns in the array determines their display order in the grid.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={[
    { field: 'id', headerText: 'ID', width: 100, textAlign: 'Right' },
    { field: 'name', headerText: 'Employee Name', width: 200 },
    { field: 'role', headerText: 'Role', width: 150 },
    {
      field: 'salary',
      headerText: 'Salary',
      width: 150,
      format: 'C2',
      textAlign: 'Right'
    }
  ]}
/>
\`\`\``,name:"columns",required:!1,type:{name:"ColumnProps<unknown>[]"}},height:{defaultValue:{value:"'auto'"},description:`Sets the height of the grid component.

Controls the vertical size of the grid. Can be specified as:
* A number (interpreted as pixels).
* A string with CSS units (e.g., '500px', '100%').
* \`auto\` to adjust to content.

When a fixed height is set, scrollbars appear automatically when content exceeds the height.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  height={400}
/>
\`\`\``,name:"height",required:!1,type:{name:"string | number"}},defaultExpandedRows:{defaultValue:{value:"[]"},description:`Specifies row indices that should be expanded by default when the grid loads.
Applies only when the master-detail feature enabled using \`isMasterDetail={true}\` in the grid props.
Rows at these indices automatically display their detail templates on initial render.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  isMasterDetail={true}
  defaultExpandedRows={[2, 4]}
  detailRowTemplate={(params) => (
    <div>Detail content for row {params.rowIndex}</div>
  )}
/>
\`\`\``,name:"defaultExpandedRows",required:!1,type:{name:"number[]"}},width:{defaultValue:{value:"'auto'"},description:`Sets the width of the grid component.

Controls the horizontal size of the grid. Can be specified as:
* A number (interpreted as pixels).
* A string with CSS units (e.g., '800px', '100%').
* \`auto\` to adjust to parent container.

When a fixed width is set, horizontal scrollbars appear automatically when content exceeds the width.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  width={900}
/>
\`\`\``,name:"width",required:!1,type:{name:"string | number"}},gridLines:{defaultValue:{value:"'Default'"},description:'Configures the visibility of grid lines between cells.\n\nDetermines which grid lines are displayed in the grid. Available options are:\n* `Default`: Shows horizontal lines only.\n* `None`: Displays no grid lines.\n* `Both`: Shows both horizontal and vertical grid lines.\n* `Horizontal`: Shows horizontal lines only.\n* `Vertical`: Shows vertical lines only.\n@example ```tsx\n<Grid\n  dataSource={employees}\n  columns={columns}\n  gridLines="Both"\n/>\n```',name:"gridLines",required:!1,type:{name:"string"}},enableAutoSpan:{defaultValue:{value:"false"},description:"Enables automatic row and column span behavior for grid cells.\nWhen set to true, adjacent cells with matching values automatically merge using both row and column spanning.\nWhen set to false, automatic spanning is disabled and only explicit numeric span values are applied.\nCells must have `rowSpan={true}` or `colSpan={true}` to participate in automatic spanning.\n@example ```tsx\n<Grid\n  dataSource={employees}\n  columns={columns}\n  enableAutoSpan={true}\n/>\n```",name:"enableAutoSpan",required:!1,type:{name:"boolean"}},enableHover:{defaultValue:{value:"true"},description:`Controls whether hover effect is applied to grid rows.

By default, rows are visually highlighted on pointer hover.
When set to false, rows retain a static appearance regardless of pointer hover movement.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  enableHover={true}
/>
\`\`\``,name:"enableHover",required:!1,type:{name:"boolean"}},enableDevMode:{defaultValue:{value:"true"},description:`Enables development-specific diagnostics for the grid component.
When set to true, the grid outputs additional console warnings, validation messages,
and debugging information to assist in identifying configuration issues and improving integration.
When set to false, these development diagnostics are suppressed to reduce console noise
and minimize runtime overhead.
This is a non-reactive property and applies only during initial render.
@example \`\`\`tsx
const isDev: boolean = process.env.NODE_ENV === 'development';
<Grid
  dataSource={data}
  columns={columns}
  enableDevMode={isDev ? true : false}
/>
\`\`\``,name:"enableDevMode",required:!1,type:{name:"boolean"}},allowKeyboard:{defaultValue:{value:"true"},description:`Controls whether keyboard navigation is enabled for the Data Grid.

By default, navigation and interaction with grid elements can be performed using keyboard shortcuts and arrow keys.
When set to false, the grid's default focus navigation behavior is disabled.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  allowKeyboard={true}
/>
\`\`\``,name:"allowKeyboard",required:!1,type:{name:"boolean"}},clipMode:{defaultValue:{value:"ClipMode.Ellipsis | 'Ellipsis'"},description:"Defines the cell content's overflow mode. The available modes are:\n* `Clip` -  Truncates the cell content when it overflows its area.\n* `Ellipsis` -  Displays ellipsis when the cell content overflows its area.\n* `EllipsisWithTooltip` - Applies an ellipsis to overflowing cell content and displays a tooltip on hover for enhanced readability.",name:"clipMode",required:!1,type:{name:"string"}},enableAltRow:{defaultValue:{value:"true"},description:`Determines whether the \`sf-alt-row\` CSS class is added to alternate rows in the Data Grid.

When set to true, the grid adds the \`sf-alt-row\` class to alternate row elements.
This supports alternating row styles, which can improve readability in data-dense layouts.
The grid does not apply any default styling for this class. Styling must be defined externally.

When set to false, the grid does not add the \`sf-alt-row\` class to any row.
@example \`\`\`tsx
<GridComponent
  dataSource={employees}
  columns={columns}
  enableAltRow={true}
/>

// External CSS
.sf-alt-row {
  background-color: #f5f5f5;
}
\`\`\``,name:"enableAltRow",required:!1,type:{name:"boolean"}},selectionSettings:{defaultValue:{value:"{ enabled: true, mode: 'Single', enableToggle: true }"},description:`Configures the grid's selection settings, determines whether \`Single\` or \`Multiple\` selections are allowed.
Used to customize the selection experience for user interactions.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  selectionSettings={{
    enabled: true,
    type: 'Row',
    mode: 'Multiple'
  }}
/>
\`\`\``,name:"selectionSettings",required:!1,type:{name:"SelectionSettings"}},sortSettings:{defaultValue:{value:"{ columns: [], allowUnsort: true, enabled: false, mode: 'Multiple' }"},description:`Specifies the sorting configuration for the grid, includes options to enable/disable sorting and controlling how data is ordered.
Used to customize sorting behavior for data presentation and user interactions.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  sortSettings={{
    enabled: true,
    columns: [
      { field: 'salary', direction: 'Descending' },
      { field: 'name', direction: 'Ascending' }
    ],
    allowUnsort: true
  }}
/>
\`\`\``,name:"sortSettings",required:!1,type:{name:"SortSettings"}},groupSettings:{defaultValue:{value:"{ enabled: false, columns: [], defaultExpanded: false, captionFormat: 'compact', showDropArea: false, showGroupedColumn: false, showUngroupButton: false }"},description:`Specifies the grouping configuration for the grid, enabling hierarchical data organization by column values.
Controls group expansion, drag-drop UI, caption formatting, and visibility of grouped columns.
Used to organize data into collapsible groups for improved readability and analysis.
@example \`\`\`tsx
<Grid
  dataSource={orders}
  columns={columns}
  groupSettings={{
    enabled: true,
    columns: ['ShipCountry', 'CustomerID'],
    defaultExpanded: true,
    showDropArea: true,
    captionFormat: 'verbose'
  }}
/>
\`\`\``,name:"groupSettings",required:!1,type:{name:"GroupSettings"}},filterSettings:{defaultValue:{value:"{ enabled: false, columns: [], type: 'FilterBar', mode: 'Immediate', immediateModeDelay: 1500, ignoreAccent: false, operators: null, caseSensitive: false }"},description:`Specifies the filtering configuration for the grid, controlling the filter UI and behavior.
Includes options to enable/disable filtering, set the filter UI type, define custom operators, and configure case or accent sensitivity.
Used to tailor the filtering experience to match application requirements and data types.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  filterSettings={{
    enabled: true,
    type: 'FilterBar',
    ignoreAccent: true,
    caseSensitive: false
  }}
/>
\`\`\``,name:"filterSettings",required:!1,type:{name:"FilterSettings"}},searchSettings:{defaultValue:{value:"{ enabled: false, fields: [], value: undefined, operator: 'contains', caseSensitive: true, ignoreAccent: false }"},description:`Specifies the search configuration for the grid, controlling how data is searched.
Defines settings for enabling the search bar, specifying searchable fields, initial search terms, operators, and case/accent sensitivity.
Used to customize the search experience for filtering grid data.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  searchSettings={{
    enabled: true,
    fields: ['name', 'role'],
    caseSensitive: true,
    operator: 'contains',
    key: 'dev'
  }}
/>
\`\`\``,name:"searchSettings",required:!1,type:{name:"SearchSettings"}},pageSettings:{defaultValue:{value:"{ enabled: false, currentPage: 1, pageSize: 12, pageCount: 8 }"},description:`Specifies the pagination configuration for the grid, controlling how data is divided and navigated.
Includes options to enable/disable pagination, set the number of records per page, define the number of navigation links, and select the initial page.
Used to tailor the pagination UI and behavior for efficient data handling.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  pageSettings={{
    enabled: true,
    pageSize: 10,
    pageCount: 5,
  }}
/>
\`\`\``,name:"pageSettings",required:!1,type:{name:"PageSettings"}},enableHtmlSanitizer:{defaultValue:{value:"false"},description:`Controls HTML sanitization for grid content.

When set to true, the grid will sanitize any suspected untrusted HTML content before rendering it.
This helps prevent cross-site scripting (XSS) attacks by removing or neutralizing potentially malicious scripts and HTML.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  enableHtmlSanitizer={true}
/>
\`\`\``,name:"enableHtmlSanitizer",required:!1,type:{name:"boolean"}},enableStickyHeader:{defaultValue:{value:"false"},description:`Makes the grid header remain visible during scrolling.

When enabled, column headers will "sticky" to the top of the viewport and remain visible even when the user scrolls down through the grid data.
This improves usability by keeping column headers in view at all times.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  height={400}
  enableStickyHeader={true}
/>
\`\`\``,name:"enableStickyHeader",required:!1,type:{name:"boolean"}},textWrapSettings:{defaultValue:{value:"{ enabled: false, wrapMode: 'Both' }"},description:`Specifies the text wrapping configuration for the grid, controlling how text is displayed.
Defines the wrap mode to determine which grid sections (header, content, or both) apply text wrapping.
Used to customize text display for readability and layout optimization.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  textWrapSettings={{
    enabled: true,
    wrapMode: 'Content'
  }}
/>
\`\`\``,name:"textWrapSettings",required:!1,type:{name:"TextWrapSettings"}},rowHeight:{defaultValue:{value:"null | 50"},description:"Specifies the height for all rows in the grid.\n\n* When a numeric value is provided, all rows will have a fixed height in pixels.\n* If `rowHeight` is `undefined` and row DOM virtualization is enabled, the height defaults to the `theme` property based value (e.g., `Theme.Material` = 50).\n* When `null` (default), row height is automatically calculated based on content and applied styles for grids without row DOM virtualization.\n@example ```tsx\n<Grid\n  dataSource={employees}\n  columns={columns}\n  rowHeight={40}\n/>\n```",name:"rowHeight",required:!1,type:{name:"number"}},getRowHeight:{defaultValue:null,description:`Gets the height of a specific row dynamically at runtime.
Accepts a callback function that returns the height in pixels based on row information, allowing row-specific height customization.
This property enables dynamic row sizing based on content, data values, or other custom logic.
@param props - Partial row information used to calculate the row height, including row index, data, and column configuration.
@returns number - Height of the row in pixels.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  getRowHeight={(props) => props.data?.OrderID === 10248 ? 60 : 40}
/>
\`\`\``,name:"getRowHeight",required:!1,type:{name:"(props: Partial<RowInfo<unknown>>) => number"}},theme:{defaultValue:{value:"Theme.Material"},description:`Specifies the theme configuration for the Data Grid component.
Used internally to determine default values for theme-dependent properties (e.g., row height in virtualization).

The theme property defines static default values and calculations used during grid initialization and rendering,
such as the default \`rowHeight\` value when row DOM virtualization is enabled.

Grid styling and visual appearance are controlled by importing the corresponding theme CSS files,
not by the \`theme\` property alone. The \`theme\` property must be coordinated with the appropriate CSS import.
@example \`\`\`tsx
// Import Material theme CSS for styling
import '@syncfusion/react-grids/styles/material.css';

// Specify theme for internal default calculations
<Grid theme={Theme.Material} />
\`\`\``,name:"theme",required:!1,type:{name:"Theme"}},virtualizationSettings:{defaultValue:{value:`{\r
enabled: true,\r
type: VirtualDomType.Both,\r
viewPortBuffer: { rows: 5, columns: 5 },\r
scrollMode: ScrollMode.Auto,\r
preventMaxRenderedRows: false\r
}`},description:`Configures virtualization behavior for grid rendering.
Includes options for enabling virtualization, defining DOM type, and customizing buffer and scroll settings.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  virtualizationSettings={{
    enabled: true,
    type: VirtualDomType.Row,
    viewPortBuffer: { rows: 10, columns: 5 }
  }}
/>
\`\`\``,name:"virtualizationSettings",required:!1,type:{name:"VirtualizationSettings"}},valueFormatterService:{defaultValue:null,description:`Service for value formatting
@private`,name:"valueFormatterService",required:!1,type:{name:"IValueFormatter"}},serviceLocator:{defaultValue:null,description:`Service locator for dependency injection
@private`,name:"serviceLocator",required:!1,type:{name:"ServiceLocator"}},localeObj:{defaultValue:null,description:`Localization object
@private`,name:"localeObj",required:!1,type:{name:"IL10n"}},locale:{defaultValue:{value:"'en-US'"},description:`Sets the localization language for the grid.

Determines the language used for all text in the grid interface, including built-in messages, button labels, and other UI text.
The grid must have the corresponding locale definitions loaded to use a specific locale.
@private`,name:"locale",required:!1,type:{name:"string"}},query:{defaultValue:{value:"new Query()"},description:`Defines a query to execute against the data source.

Allows you to apply a predefined \`Query\` object to the data source, which can include filtering, sorting, paging, and other data operations.
This is especially useful when working with remote data sources or when you need complex data operations.
@example \`\`\`tsx
import { Query } from '@company/data';

const GridExample: React.FC = () => {
  // Create a query to filter and sort data
  const query = new Query()
    .where('salary', 'greaterThan', 50000)
    .sortBy('name', 'ascending');

  return (
    <Grid
      dataSource={employees}
      columns={columns}
      query={query}
    />
  );
};
\`\`\``,name:"query",required:!1,type:{name:"Query"}},emptyRecordTemplate:{defaultValue:{value:"null"},description:`Template for displaying content when the grid has no records.

Customizes what is displayed when the grid has no data to show. This can be provided as a string, React element, or a function that returns content.
It provides better user experience by explaining why the grid is empty or suggesting actions to take.
@example \`\`\`tsx
const GridExample: React.FC = () => {
  // Custom template as a React element
  const emptyTemplate = (
    <div className="empty-grid-message">
      <img src="/assets/empty-state.svg" alt="No data" />
      <h3>No employees found</h3>
      <p>Try adjusting your search or filters, or add a new employee.</p>
      <button className="btn btn-primary">Add Employee</button>
    </div>
  );

  return (
    <Grid
      dataSource={[]}
      columns={columns}
      emptyRecordTemplate={emptyTemplate}
    />
  );
};
\`\`\``,name:"emptyRecordTemplate",required:!1,type:{name:"string | ComponentType<void> | ReactElement<unknown, string | JSXElementConstructor<any>>"}},rowTemplate:{defaultValue:{value:"null"},description:`Specifies a custom template for rendering rows in the grid.

Allows complete customization of row rendering by providing a template that replaces the default row structure.
This can be a string template, React element, or function that returns the row content.
@example \`\`\`tsx
const CustomRowTemplate = (props: Employee) => {
  return (
    <tr>
      <td colSpan={3}>
        <div className="custom-row">
          <h4>{props.name}</h4>
          <p>Role: {props.role} | Salary: {props.salary}</p>
        </div>
      </td>
    </tr>
  );
};

<Grid
  dataSource={employees}
  columns={columns}
  rowTemplate={CustomRowTemplate}
/>
\`\`\``,name:"rowTemplate",required:!1,type:{name:"string | ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentType<unknown>"}},aggregates:{defaultValue:{value:"null"},description:`Configures summary rows with aggregate functions.

The aggregates property allows you to add summary rows to the grid, such as totals, averages, or counts.
Each aggregate row can contain multiple aggregations that apply functions like \`sum\`, \`average\`, \`min\`, \`max\`, or \`count\` to specific columns.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  aggregates={[
    {
      columns: [
        {
          field: 'salary',
          type: 'Sum',
          format: 'C2',
          footerTemplate: 'Total Salary: \${Sum}'
        },
        {
          field: 'id',
          type: 'Count',
          footerTemplate: 'Total Employees: \${Count}'
        }
      ]
    }
  ]}
/>
\`\`\``,name:"aggregates",required:!1,type:{name:"AggregateRowProps[]"}},editSettings:{defaultValue:{value:"{ allowAdd: false, allowEdit: false, allowDelete: false, mode: 'Normal', editOnDoubleClick: true, confirmOnEdit: true, confirmOnDelete: false, newRowPosition: 'Top' }"},description:`Configures the editing behavior of the Data Grid.

The editSettings property enables and controls editing functionality.
It defines which editing operations are permitted, such as adding, editing, and deleting rows,
and specifies the editing mode to be used.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  editSettings={{
    allowAdd: true,
    allowEdit: true,
    allowDelete: true,
    mode: 'Inline',
    confirmOnDelete: true
  }}
/>
\`\`\``,name:"editSettings",required:!1,type:{name:"EditSettings<unknown>"}},isMasterDetail:{defaultValue:{value:"false"},description:`Enable master-detail (expandable rows) feature for this grid.
When enabled, all data rows become expandable master rows.
@example \`\`\`tsx
<Grid
  isMasterDetail={true}
  detailRowHeight={400}
  detailRowTemplate={(params) => (
    <div style={{ padding: '20px' }}>
      <h4>Order {params.rowIndex} Details</h4>
      <Grid
        dataSource={getDetailData(params.row.id)}
        columns={detailColumns}
      />
    </div>
  )}
/>
\`\`\``,name:"isMasterDetail",required:!1,type:{name:"boolean"}},detailRowHeight:{defaultValue:{value:"300"},description:'Defines the height of the detail row.\nBy default, the detail row height is set to "300px".\nA custom height can be applied when the master‑detail feature is enabled `isMasterDetail={true}` in the grid props.\n@example ```tsx\n<Grid isMasterDetail detailRowHeight={400} />\n```',name:"detailRowHeight",required:!1,type:{name:"number"}},detailRowTemplate:{defaultValue:null,description:`Template for rendering the content of a detail row.
Invoked for each expanded master row, providing its row data.
Commonly used to render a nested Grid or other custom components.
@example \`\`\`tsx
<Grid
  isMasterDetail
  detailRowTemplate={(params) => (
    <div style={{ padding: '20px' }}>
      <h4>Order {params.rowIndex} Details</h4>
      <Grid
        dataSource={detailData[params.row.id]}
        columns={detailColumns}
      />
    </div>
  )}
/>
\`\`\``,name:"detailRowTemplate",required:!1,type:{name:"{DetailRowTemplate<T>}"}},onRowExpand:{defaultValue:null,description:`Fires when a master row is expanded.
@private
@event onRowExpand
\`\`\`tsx
<Grid
isMasterDetail
onRowExpand={(args) => {
console.log('Row expanded:', args.rowIndex);
}}
/>
\`\`\``,name:"onRowExpand",required:!1,type:{name:"(event: RowExpandEvent<unknown>) => void"}},onRowCollapse:{defaultValue:null,description:`Fires when a master row is collapsed.
@private
@event onRowCollapse
\`\`\`tsx
<Grid
isMasterDetail
onRowCollapse={(args) => {
console.log('Row collapsed:', args.rowIndex);
}}
/>
\`\`\``,name:"onRowCollapse",required:!1,type:{name:"(event: RowCollapseEvent<unknown>) => void"}},toolbar:{defaultValue:{value:"null"},description:`Configures the grid toolbar with predefined or custom items.

The toolbar property allows you to add a toolbar to the grid with both predefined actions (add, edit, delete, update, cancel, search)
and custom items. Custom items can include text, template content, and click handlers.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
  editSettings={{
    allowAdd: true,
    allowEdit: true,
    allowDelete: true
  }}
/>
\`\`\``,name:"toolbar",required:!1,type:{name:"(string | ToolbarItemProps)[]"}},showColumnChooser:{defaultValue:{value:"false"},description:`Determines whether the column chooser functionality is enabled.
When set to false (default), the column chooser button will be disabled in the toolbar (but still visible if included in toolbar array).
When set to true, the column chooser button will be enabled and the dialog can be opened.

This property controls the enabled/disabled state of the column chooser feature, not its visibility.
To show the column chooser button, you must include 'ColumnChooser' in the toolbar array.
@example \`\`\`tsx
// Column Chooser button is visible but disabled (default behavior)
<Grid
  dataSource={data}
  toolbar={['Add', 'Edit', 'ColumnChooser']}
/>

// Column Chooser button is visible and enabled
<Grid
  dataSource={data}
  toolbar={['Add', 'Edit', 'ColumnChooser']}
  showColumnChooser={true}
/>
\`\`\``,name:"showColumnChooser",required:!1,type:{name:"boolean"}},columnChooserSettings:{defaultValue:{value:"{ enableSearch: true, operator: 'startsWith', ignoreAccent: false, sortDirection: 'None', selectedColumns: [] }"},description:`Defines the configuration for the Column Chooser dialog,
controlling both its behavior and appearance. Enables customization of:

- Search with customizable operators
- Diacritics‑insensitive search
- Column ordering and sorting
- Custom templates for header, footer, and column items
@example \`\`\`tsx
<Grid
  dataSource={data}
  toolbar={['ColumnChooser']}
  showColumnChooser={true}
  columnChooserSettings={{
    enableSearch: true,
    operator: 'contains',
    ignoreAccent: true,
    sortDirection: 'Ascending',
    selectedColumns: ['OrderID', 'CustomerName']
  }}
/>
\`\`\``,name:"columnChooserSettings",required:!1,type:{name:"ColumnChooserSettings"}},rowClass:{defaultValue:{value:"-"},description:`Applies a CSS class to each grid row either globally or conditionally.
Accepts a static class name or a callback function that returns a class name based on row context.

The callback receives a \`RowClassProps\` object with the following properties:
* \`rowType\` – Identifies the structural role of the row: \`Header\`, \`Content\`, or \`Aggregate\`. Useful for styling header, data, or summary rows.
* \`rowIndex\` – The zero-based index of the row.
* \`data\` – The full data object for the row, enabling conditional styling based on field values.
@param props - Optional event payload containing row type, row index, and complete row data.
@returns A CSS class name to apply to the row.
@example const GridComponent = () => {
  const handleRowClass = (props?: RowClassProps): string => {
    if (props?.rowType === RowType.Header) return 'Header-row';
    if (props?.rowType === RowType.Aggregate) return 'summary-row';
    return '';
  };

  return (
    <Grid
      dataSource={data}
      rowClass={handleRowClass}
    />
  );
};`,name:"rowClass",required:!1,type:{name:"string | ((props?: RowClassProps<unknown>) => string)"}},loadingIndicatorSettings:{defaultValue:{value:`{\r
  indicatorType: LoadingIndicatorType.Spinner,\r
  params: {\r
    visible: true,\r
    thickness: '3px',\r
    animationDuration: '1s',\r
    overlay: true,\r
    size: '36px',\r
    color: Color.Primary\r
  }\r
}`},description:`Configures loading indicator settings for the Data Grid component.
Applies spinner or skeleton customization during data operations.
@example \`\`\`tsx
<Grid loadingIndicatorSettings={{
  indicatorType: LoadingIndicatorType.Spinner,
  params: { size: '48px', color: '#0078D4' }
}} />
\`\`\``,name:"loadingIndicatorSettings",required:!1,type:{name:"LoadingIndicatorSettings"}},contextMenuSettings:{defaultValue:{value:"{ enabled: false, items: [], menuSettings: {} }"},description:`Configures the context menu settings for the Data Grid component.
Enables and customizes the context menu that appears on right‑click interactions.
Provides options to:

- Enable or disable the context menu
- Define default or custom menu items
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  contextMenuSettings={{
    enabled: true,
    items: ['Edit', 'Delete', 'SortAscending', 'SortDescending']
  }}
/>
\`\`\``,name:"contextMenuSettings",required:!1,type:{name:"ContextMenuSettings"}},onContextMenuOpen:{defaultValue:null,description:`Fires when the context menu is about to be opened or displayed on the grid.
Allows customization, validation, or cancellation of the context menu before it appears.
Provides access to the target element, menu items, and associated row/column data.

Supports both synchronous and asynchronous menu item loading:
- **Synchronous**: Return the modified ContextMenuOpenEvent object.
- **Asynchronous**: Return a Promise that resolves to the modified ContextMenuOpenEvent object.
@event onContextMenuOpen
@param event - Event arguments containing menu configuration, target element, and row/column context.
@returns The modified event object or a Promise resolving to the modified event object.
@example \`\`\`tsx
// Synchronous example
const handleContextMenuOpen = (event: ContextMenuOpenEvent) => {
  // Customize menu items based on context
  if (event.data?.role === 'Admin') {
    // Show additional menu items for admin users
  }
  return event; // Return the modified event
};

// Asynchronous example
const handleContextMenuOpen = (args: ContextMenuOpenEvent) => {
  return new Promise<ContextMenuOpenEvent>((res) => setTimeout(() => res(args), 2000));
}

return (
  <Grid
    dataSource={employees}
    columns={columns}
    contextMenuSettings={{ enabled: true }}
    onContextMenuOpen={handleContextMenuOpen}
  />
);
\`\`\``,name:"onContextMenuOpen",required:!1,type:{name:"(event: ContextMenuOpenEvent<unknown>) => ContextMenuOpenEvent<unknown> | Promise<ContextMenuOpenEvent<unknown>>"}},onContextMenuClose:{defaultValue:null,description:`Fires when the context menu is closed or hidden on the grid.
Suitable for cleanup operations or resetting UI state after the context menu interaction completes.
Triggered when the user dismisses the menu through selection, clicking outside, or pressing Escape.
@event onContextMenuClose
@returns
@example \`\`\`tsx
const GridComponent = () => {
  const handleContextMenuClose = () => {
    // Perform cleanup or reset UI state
    console.log('Context menu closed');
  };

  return (
    <Grid
      dataSource={employees}
      columns={columns}
      contextMenuSettings={{ enabled: true }}
      onContextMenuClose={handleContextMenuClose}
    />
  );
};
\`\`\``,name:"onContextMenuClose",required:!1,type:{name:"() => void"}},onContextMenuClick:{defaultValue:null,description:`Fires when a context menu item is selected or clicked by the user.
Handles the action associated with the selected menu item, such as \`Edit\`, \`Delete\`, \`Sort\`, etc.
Provides context about the selected item, target row/column, and triggering element.
@event onContextMenuClick
@param event - Event arguments containing selected item details and grid context.
@returns
@example \`\`\`tsx
const GridComponent = () => {
  const handleContextMenuClick = (event: MenuSelectEvent) => {
    // Handle the selected context menu action
  };

  return (
    <Grid
      dataSource={employees}
      columns={columns}
      contextMenuSettings={{ enabled: true }}
      onContextMenuClick={handleContextMenuClick}
    />
  );
};
\`\`\``,name:"onContextMenuClick",required:!1,type:{name:"(event: MenuSelectEvent) => void"}},onGridRenderStart:{defaultValue:null,description:`Fires at the start of grid initialization before data processing. and component mount.
This event is triggered during the React render phase, before the component is mounted to the DOM.
Useful for initial configurations or showing loading indicators.
Do not perform state updates in this callback, as they will trigger React warnings
about updating unmounted components. Use \`onGridRenderComplete\` instead for state updates.
@event onGridRenderStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleGridRenderStart = () => {
    // Safe: Logging only - no state updates
    console.log('Grid render starting');
  };

  const handleGridRenderComplete = () => {
    // Safe: State updates after mount (use this callback for state updates)
    setGridReady(true);
  };

  return (
    <Grid
      dataSource={data}
      onGridRenderStart={handleGridRenderStart}
      onGridRenderComplete={handleGridRenderComplete}
    />
  );
};
\`\`\``,name:"onGridRenderStart",required:!1,type:{name:"() => void"}},onGridInit:{defaultValue:null,description:`Fires after the grid is fully initialized and rendered in the DOM.
Ideal for DOM-related operations or interacting with the grid.
@private
@event onGridInit`,name:"onGridInit",required:!1,type:{name:"() => void"}},onDataLoadStart:{defaultValue:null,description:`Fires after data is received but before binding to the grid.
Allows data modification or filtering before rendering.
@private
@event onDataLoadStart`,name:"onDataLoadStart",required:!1,type:{name:"(event: DataLoadStartEvent | ReturnType) => void"}},onDataLoad:{defaultValue:null,description:`Fires after data is successfully bound to the grid.
Suitable for actions requiring fully loaded data.
@event onDataLoad
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataLoaded = () => {
    // handle your action here
  };

  return (
    <div>
      <div id="loadingIndicator">Loading...</div>
      <Grid
        dataSource={data}
        onDataLoad={handleDataLoaded}
      />
    </div>
  );
};
\`\`\``,name:"onDataLoad",required:!1,type:{name:"() => void"}},onGridRenderComplete:{defaultValue:null,description:`Fired when the grid is fully loaded and ready for user interaction.
Suitable for actions requiring only on grid initially fully loaded data.
@event onGridRenderComplete
@example \`\`\`tsx
const GridComponent = () => {
  const handleGridReady = () => {
    // handle your action here
  };

  return (
    <div>
      <div id="loadingIndicator">Loading...</div>
      <Grid
        dataSource={data}
        onGridRenderComplete={handleGridReady}
      />
    </div>
  );
};
\`\`\``,name:"onGridRenderComplete",required:!1,type:{name:"() => void"}},onHeaderCellRender:{defaultValue:null,description:`Fires for each header cell during grid rendering.
Enables customization of header cell appearance or content.
@private
@event onHeaderCellRender`,name:"onHeaderCellRender",required:!1,type:{name:"(event: HeaderCellRenderEvent) => void"}},onAggregateCellRender:{defaultValue:null,description:`Fires for each aggregate cell during grid rendering.
Allows customization of aggregate cell appearance or content.
@private
@event onAggregateCellRender`,name:"onAggregateCellRender",required:!1,type:{name:"(event: AggregateCellRenderEvent<unknown>) => void"}},onCellRender:{defaultValue:null,description:`Fires for each data cell during grid rendering.
Enables customization of data cell appearance or content.
@private
@event onCellRender`,name:"onCellRender",required:!1,type:{name:"(event: CellRenderEvent<unknown>) => void"}},onRowRender:{defaultValue:null,description:`Fires for each row when bound with data.
Allows customization of row appearance or behavior.
@private
@event onRowRender`,name:"onRowRender",required:!1,type:{name:"(event: RowRenderEvent<unknown>) => void"}},onAggregateRowRender:{defaultValue:null,description:`Fires for each aggregate row when bound with data.
Enables customization of aggregate row appearance or behavior.
@private
@event onAggregateRowRender`,name:"onAggregateRowRender",required:!1,type:{name:"(event: AggregateRowRenderEvent<unknown>) => void"}},onRefreshStart:{defaultValue:null,description:`Fires when grid refresh.
@private`,name:"onRefreshStart",required:!1,type:{name:"(event: Object) => void"}},onRefresh:{defaultValue:null,description:`Fired when the grid data is refreshed or updated.
@event onRefresh
@example \`\`\`tsx
const GridComponent = () => {
  const handleGridRefresh = () => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onRefresh={handleGridRefresh}
    />
  );
};
\`\`\``,name:"onRefresh",required:!1,type:{name:"() => void"}},onGridDestroy:{defaultValue:null,description:`Fires when the grid component is destroyed.
@private
@event onGridDestroy`,name:"onGridDestroy",required:!1,type:{name:"() => void"}},onFilterStart:{defaultValue:null,description:`Fires when a filtering operation begins on the grid.
Allows customization or cancellation of filter behavior.
@private
@event onFilterStart`,name:"onFilterStart",required:!1,type:{name:"(event: FilterEvent) => void"}},onFilter:{defaultValue:null,description:`Fires after a filtering operation completes on the grid.
Provides filter state details for post-filter actions.
@event onFilter
@example \`\`\`tsx
const GridComponent = () => {
  const handleFilterEnd = (event: FilterEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onFilter={handleFilterEnd}
      filterSettings={{ enabled: true }}
    />
  );
};
\`\`\``,name:"onFilter",required:!1,type:{name:"(event: FilterEvent) => void"}},onFilterDialogBeforeOpen:{defaultValue:null,description:`Fires before the filter Dialog is displayed or opened.
Allows customization or cancellation before the filter interface appears.
@private
@event onFilterDialogBeforeOpen`,name:"onFilterDialogBeforeOpen",required:!1,type:{name:"(event: FilterDialogBeforeOpenEvent) => void"}},onFilterDialogAfterOpen:{defaultValue:null,description:`Fires after the filter Dialog is fully displayed and ready for interaction.
Suitable for initializing custom filter components or DOM manipulation.
@event onFilterDialogAfterOpen
@example \`\`\`tsx
const GridComponent = () => {
  const handleFilterDialogOpen = (event: FilterDialogAfterOpenEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onFilterDialogAfterOpen={handleFilterUIOpen}
      filterSettings={{ enabled: true,  }}
    />
  );
};
\`\`\``,name:"onFilterDialogAfterOpen",required:!1,type:{name:"(event: FilterDialogAfterOpenEvent) => void"}},onColumnChooserBeforeOpen:{defaultValue:null,description:`Fires before the Column Chooser dialog is displayed or opened.
Allows customization of column visibility or cancellation before the dialog appears.
@event onColumnChooserBeforeOpen
@example \`\`\`tsx
const GridComponent = () => {
  const handleColumnChooserBeforeOpen = (event: ColumnChooserBeforeOpenEvent) => {
    // handle your action here
    if (someCondition) {
      event.cancel = true; // prevent dialog from opening
    }
  };

  return (
    <Grid
      dataSource={employeeData}
      onColumnChooserBeforeOpen={handleColumnChooserBeforeOpen}
      showColumnChooser={true}
    />
  );
};
\`\`\``,name:"onColumnChooserBeforeOpen",required:!1,type:{name:"(event: ColumnChooserBeforeOpenEvent) => void"}},onColumnChooserApply:{defaultValue:null,description:`Fires when column changes are applied in the Column Chooser dialog.
Triggered when the user clicks OK/Apply button with the final column visibility configuration.
Used to track which columns were shown/hidden and perform post-apply actions.
@event onColumnChooserApply
@example \`\`\`tsx
const GridComponent = () => {
  const handleColumnChooserApply = (event: ColumnChooserApplyEvent) => {
    // handle column visibility changes
    console.log('Columns:', event.selectedColumns);
    console.log('Visibility:', event.columnVisibility);
  };

  return (
    <Grid
      dataSource={employeeData}
      onColumnChooserApply={handleColumnChooserApply}
      showColumnChooser={true}
    />
  );
};
\`\`\``,name:"onColumnChooserApply",required:!1,type:{name:"(event: ColumnChooserApplyEvent) => void"}},onSortStart:{defaultValue:null,description:`Fires when a sorting operation begins on the grid.
Allows customization or cancellation of sort behavior.
@private
@event onSortStart`,name:"onSortStart",required:!1,type:{name:"(event: SortEvent) => void"}},onSort:{defaultValue:null,description:`Fires after a sorting operation completes on the grid.
Provides sort state details for post-sort actions.
@event onSort
@example \`\`\`tsx
const GridComponent = () => {
  const handleSortEnd = (event: SortEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={productData}
      onSort={handleSortEnd}
      sortSettings={{enabled: true}}
    />
  );
};
\`\`\``,name:"onSort",required:!1,type:{name:"(event: SortEvent) => void"}},onGroupStart:{defaultValue:null,description:`Fires when a grouping operation begins on the grid.
Allows customization or cancellation of group behavior.
@private
@event onGroupStart`,name:"onGroupStart",required:!1,type:{name:"(args: OnGroupArgs<unknown>) => void"}},onGroup:{defaultValue:null,description:`Fires when a grouping operation occurs on the grid.
Triggered by add/remove column, expand/collapse, or reorder group operations.
Provides current grouped columns and operation type for custom handling.
@event onGroup
@example \`\`\`tsx
const GridComponent = () => {
  const handleGroup = (args: OnGroupArgs) => {
    console.log(\`Operation: \${args.operation}, Columns: \${args.columns.join(', ')}\`);
  };
  const [groupSettings] = useState<GroupSettings>({ enabled: true, showDropArea: true });

  return (
    <Grid
      dataSource={orderData}
      onGroup={handleGroup}
      groupSettings={groupSettings}
    />
  );
};
\`\`\``,name:"onGroup",required:!1,type:{name:"(args: OnGroupArgs<unknown>) => void"}},onSearchStart:{defaultValue:null,description:`Fires when a searching operation begins on the grid.
Allows customization or addition of search conditions.
@private
@event onSearchStart`,name:"onSearchStart",required:!1,type:{name:"(event: SearchEvent) => void"}},onSearch:{defaultValue:null,description:`Fires after a searching operation completes on the grid.
Provides search result details for post-search actions.
@event onSearch
@example \`\`\`tsx
const GridComponent = () => {
  const handleSearchEnd = (event: SearchEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={productData}
        onSearch={handleSearchEnd}
        toolbar={['Search']}
        searchSettings={{ enabled: true }}
      />
    </div>
  );
};
\`\`\``,name:"onSearch",required:!1,type:{name:"(event: SearchEvent) => void"}},onRowDoubleClick:{defaultValue:null,description:`Fires when a grid row is clicked.
Provides details about the clicked row for custom actions.
@event onRowDoubleClick
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowDoubleClick = (event: RecordDoubleClickEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={customerData}
        onRowDoubleClick={handleRowDoubleClick}
      />
    </div>
  );
};
\`\`\``,name:"onRowDoubleClick",required:!1,type:{name:"(event: RecordDoubleClickEvent<unknown>) => void"}},onToolbarItemClick:{defaultValue:null,description:`Fires when a toolbar item is clicked.
Enables custom actions for toolbar buttons.
@event onToolbarItemClick
@example \`\`\`tsx
const GridComponent = () => {
  const handleToolbarClick = (event: ClickEventArgs) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={productData}
      onToolbarItemClick={handleToolbarClick}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Print']}
    >
      <Toolbar />
    </Grid>
  );
};
\`\`\``,name:"onToolbarItemClick",required:!1,type:{name:"(event: ToolbarClickEvent) => void"}},onCellFocus:{defaultValue:null,description:`Fires when a grid cell gains focus.
Provides details about the focused cell.
@event onCellFocus
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellFocused = (event: CellFocusEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={productData}
      onCellFocus={handleCellFocused}
    />
  );
};
\`\`\``,name:"onCellFocus",required:!1,type:{name:"(event: CellFocusEvent<unknown>) => void"}},onCellClick:{defaultValue:null,description:`Fires when a grid cell is clicked.
Provides details about the clicked cell.
@event onCellClick
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellClick = (event: CellFocusEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={orderData}
        onCellClick={handleCellClick}
      />
    </div>
  );
};
\`\`\``,name:"onCellClick",required:!1,type:{name:"(event: CellFocusEvent<unknown>) => void"}},onCellFocusStart:{defaultValue:null,description:`Fires before a grid cell gains focus.
Allows validation or modification of focus behavior.
@private
@event onCellFocusStart`,name:"onCellFocusStart",required:!1,type:{name:"(event: CellFocusEvent<unknown>) => void"}},onRowSelecting:{defaultValue:null,description:`Fires before a row is selected.
Allows validation or cancellation of row selection.
@private
@event onRowSelecting`,name:"onRowSelecting",required:!1,type:{name:"(event: RowSelectingEvent<unknown>) => void"}},onRowSelect:{defaultValue:null,description:`Fires after a row is successfully selected.
Provides details about the selected row.
@event onRowSelect
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowSelected = (event: RowSelectEvent) => {
    // handle your action here
  };

  return (
    <div className="app-container">
      <Grid
        dataSource={customerData}
        onRowSelect={handleRowSelected}
      />
    </div>
  );
};
\`\`\``,name:"onRowSelect",required:!1,type:{name:"(event: RowSelectEvent<unknown>) => void"}},onRowDeselecting:{defaultValue:null,description:`Fires before a row is deselected.
Allows validation or cancellation of row deselection.
@private
@event onRowDeselecting`,name:"onRowDeselecting",required:!1,type:{name:"(event: RowSelectingEvent<unknown>) => void"}},onRowDeselect:{defaultValue:null,description:`Fires after a row is successfully deselected.
Provides details about the deselected row.
@event onRowDeselect
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowDeselected = (event: RowSelectEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={itemData}
        onRowDeselect={handleRowDeselected}
      />
    </div>
  );
};
\`\`\``,name:"onRowDeselect",required:!1,type:{name:"(event: RowSelectEvent<unknown>) => void"}},onCellSelecting:{defaultValue:null,description:`Fires before cells are selected in the grid.
Allows validation or cancellation of cell selection.
Only fires when selectionSettings.type is \`Cell\`.
@private
@event onCellSelecting
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellSelecting = (event: CellSelectingEvent) => {
    // Prevent selection of specific cells
    if (event.cells.some(cell => cell.rowIndex === 0)) {
      event.cancel = true;
    }
  };

  return (
    <Grid
      dataSource={orderData}
      onCellSelecting={handleCellSelecting}
      selectionSettings={{ type: 'Cell', cellSelection: { enabled: true } }}
    />
  );
};
\`\`\``,name:"onCellSelecting",required:!1,type:{name:"(event: CellSelectingEvent<unknown>) => void"}},onCellSelect:{defaultValue:null,description:`Fires after cells are successfully selected in the grid.
Provides details about the selected cells including data and positions.
Only fires when selectionSettings.type is 'Cell'.
@event onCellSelect
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellSelect = (event: CellSelectEvent) => {
    console.log('Selected cells:', event.cells);
    console.log('Cell data:', event.data);
  };

  return (
    <Grid
      dataSource={orderData}
      onCellSelect={handleCellSelect}
      selectionSettings={{ type: 'Cell', cellSelection: { enabled: true } }}
    />
  );
};
\`\`\``,name:"onCellSelect",required:!1,type:{name:"(event: CellSelectEvent<unknown>) => void"}},onCellDeselecting:{defaultValue:null,description:`Fires before cells are deselected in the grid.
Allows validation or cancellation of cell deselection.
Only fires when selectionSettings.type is \`Cell\`.
@private
@event onCellDeselecting
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellDeselecting = (event: CellDeselectingEvent) => {
    // Prevent deselection of specific cells
    if (event.cells.length > 5) {
      event.cancel = true;
    }
  };

  return (
    <Grid
      dataSource={orderData}
      onCellDeselecting={handleCellDeselecting}
      selectionSettings={{ type: 'Cell', cellSelection: { enabled: true } }}
    />
  );
};
\`\`\``,name:"onCellDeselecting",required:!1,type:{name:"(event: CellDeselectingEvent<unknown>) => void"}},onCellDeselect:{defaultValue:null,description:`Fires after cells are successfully deselected in the grid.
Provides details about the deselected cells.
Only fires when selectionSettings.type is 'Cell'.
@event onCellDeselect
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellDeselect = (event: CellDeselectEvent) => {
    console.log('Deselected cells:', event.cells);
  };

  return (
    <Grid
      dataSource={orderData}
      onCellDeselect={handleCellDeselect}
      selectionSettings={{ type: 'Cell', cellSelection: { enabled: true } }}
    />
  );
};
\`\`\``,name:"onCellDeselect",required:!1,type:{name:"(event: CellDeselectEvent<unknown>) => void"}},onPageChangeStart:{defaultValue:null,description:`Event triggered before the paging operation start.
@private
@event onPageChangeStart`,name:"onPageChangeStart",required:!1,type:{name:"(event: PageEvent) => void"}},onPageChange:{defaultValue:null,description:`Event triggered after a paging operation is completed on the grid.
@event onPageChange
@example \`\`\`tsx
const GridComponent = () => {
  const handlePageChangeEnd = (event: PageEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={itemData}
        onPageChange={handlePageChangeEnd}
      />
    </div>
  );
};
\`\`\``,name:"onPageChange",required:!1,type:{name:"(event: PageEvent) => void"}},onRowEditStart:{defaultValue:null,description:`Fires when editing begins on a grid record.
Allows validation or field modification before editing.
@event onRowEditStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowEdit = (event: EditEventArgs) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onRowEditStart={handleRowEdit}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onRowEditStart",required:!1,type:{name:"(event: RowEditEvent<unknown>) => void"}},onCellEditStart:{defaultValue:null,description:`Fires when cell editing begins in \`Cell\` edit mode.
Provides an opportunity to validate the target cell or cancel the edit
before the editor is presented.
@event onCellEditStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellEdit = (event: CellEditEvent) => {
    // Prevent editing for specific cells
    if (event.field === 'id') {
      event.cancel = true;
    }
  };

  return (
    <Grid
      dataSource={orderData}
      onCellEditStart={handleCellEdit}
      editSettings={{ mode: 'Cell', allowEdit: true }}
    />
  );
};
\`\`\``,name:"onCellEditStart",required:!1,type:{name:"(event: CellEditEvent<unknown>) => void"}},onRowAddStart:{defaultValue:null,description:`Fires when the process of adding a new row starts.
@event onRowAddStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowAdd = (event: RowAddEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onRowEditStart={handleRowadd}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onRowAddStart",required:!1,type:{name:"(event: RowAddEvent<unknown>) => void"}},onFormRender:{defaultValue:null,description:`Fires when the edit or add form is fully loaded and ready for user input.
@event onFormRender
@example \`\`\`tsx
const GridComponent = () => {
  const handleFormReady = (event: FormRenderEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onFormRender={handleFormReady}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onFormRender",required:!1,type:{name:"(event: FormRenderEvent<unknown>) => void"}},onDataChangeStart:{defaultValue:null,description:`Fires when a create, update, or delete operation is started.
@event onDataChangeStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataChangeStart = (event: SaveEvent | DeleteEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onDataChangeStart={handleDataChangeStart}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onDataChangeStart",required:!1,type:{name:"(event: SaveEvent<unknown> | DeleteEvent<unknown>) => void"}},onDataChangeComplete:{defaultValue:null,description:`Fires when a create, update, or delete operation is completed.
@event onDataChangeComplete
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataChangeComplete = (event: SaveEvent | DeleteEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onDataChangeComplete={handleDataChangeComplete}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onDataChangeComplete",required:!1,type:{name:"(event: SaveEvent<unknown> | DeleteEvent<unknown>) => void"}},onDataChangeCancel:{defaultValue:null,description:`Fires when a CRUD operation is cancelled.
@event onDataChangeCancel
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataChangeCancel = (event: FormCancelEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onDataChangeCancel={handleDataChangeCancel}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onDataChangeCancel",required:!1,type:{name:"(event: FormCancelEvent<unknown>) => void"}},onDeleteDialogOpen:{defaultValue:null,description:`Fires when the bulk‑delete confirmation dialog opens with cross‑page selection enabled.
Allows customization of dialog options, such as disabling specific choices or setting the default selection.

Use Cases:
- Disable "Delete Current Page": Prevents partial deletion when records are selected across multiple pages.
- Preselect "Delete All Selected Records": Ensures this option is the default, reducing errors and maintaining consistency.
@event onDeleteDialogOpen
@example \`\`\`tsx
const GridComponent = () => {
  const handleDeleteDialogOpen = (eventArgs: DeleteDialogEventArgs) => {
    // Customize dialog options
    if (eventArgs.totalSelectedCount > 100) {
      eventArgs.customizations = {
        pageOptionDisabled: true,
        defaultOption: 'all'
      };
    }
  };

  return (
    <Grid
      dataSource={orderData}
      onDeleteDialogOpen={handleDeleteDialogOpen}
      editSettings={{ allowDelete: true }}
      selectionSettings={{ mode: 'Multiple', persistSelection: true }}
    />
  );
};
\`\`\``,name:"onDeleteDialogOpen",required:!1,type:{name:"(eventArgs: DeleteDialogEventArgs) => void"}}}}}catch{}const Rn={title:"Grid/VirtualGridBase",component:se,parameters:{layout:"fullscreen",docs:{description:{component:"A fully configurable Grid component with performance comparison capabilities."}}},argTypes:{localDataCount:{control:"select",options:["0","100","1000","10000","100000"],description:"Grid Local DataSource Count"}}},N=yn(6,!1),ie=[{columns:Cn(N.length)}];N.unshift({type:hn.Checkbox,width:50,allowFilter:!1});const _={args:{localDataCount:100,columns:N,sortSettings:{enabled:!0},filterSettings:{enabled:!0},pageSettings:{enabled:!0,pageSize:20}}},K={args:{localDataCount:2e6,columns:N.slice(1,11),editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Normal"},toolbar:["Add","Edit","Delete","Update","Cancel","Search"],searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,enableFilterBarOperator:!0},pageSettings:{enabled:!0,pageSize:2e6},height:"100%"}},$={args:{dataSource:new te({url:"https://ej2services.syncfusion.com/js/development/api/UrlDataSource",adaptor:new pn}),query:new ne().addParams("dataCount","100").addParams("serverpagesize","50"),columns:[{field:"EmployeeID",visible:!0,headerText:"Employee ID",isPrimaryKey:!0,width:"150"},{field:"Employees",headerText:"Employee Name",width:"230",clipMode:"EllipsisWithTooltip"},{field:"Designation",headerText:"Designation",width:"170",clipMode:"EllipsisWithTooltip"},{field:"Mail",headerText:"Mail",width:"230"},{field:"Location",headerText:"Location",width:"140"}],selectionSettings:{mode:"Single"},searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"Excel"},virtualizationSettings:{enableCache:!0,scrollMode:v.Virtual},height:"100%",editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0},toolbar:["Add","Edit","Delete","Update","Cancel","Search"]}},J={args:{dataSource:new te({url:"https://ej2services.syncfusion.com/react/development/api/GridWebAPIService",adaptor:new mn}),columns:[{field:"OrderID",headerText:"OrderID",isPrimaryKey:!0,width:"130",allowSearch:!1},{field:"CustomerID",headerText:"CustomerID",width:"230",clipMode:"EllipsisWithTooltip"},{field:"ShipCity",headerText:"ShipCity",width:"230"},{field:"EmployeeID",headerText:"EmployeeID",width:"130",clipMode:"EllipsisWithTooltip",allowSearch:!1},{field:"EmployeeName",headerText:"EmployeeName",width:"230",clipMode:"EllipsisWithTooltip",allowSearch:!1,allowFilter:!1,allowSort:!1},{field:"Designation",headerText:"Designation",width:"230",clipMode:"EllipsisWithTooltip",allowSearch:!1,allowFilter:!1,allowSort:!1},{field:"CurrentSalary",headerText:"CurrentSalary",width:"130",clipMode:"EllipsisWithTooltip",allowSearch:!1,allowFilter:!1,allowSort:!1},{headerText:"Command Actions",width:200,getCommandItems:()=>[a.jsx(m,{type:h.Edit},"Edit"),a.jsx(m,{type:h.Delete},"Delete"),a.jsx(m,{type:h.Update},"Update"),a.jsx(m,{type:h.Cancel},"Cancel")]}],selectionSettings:{mode:"Single"},sortSettings:{enabled:!0},filterSettings:{enabled:!0},virtualizationSettings:{scrollMode:v.Virtual},height:"100%",query:new ne().addParams("serverpagesize","50"),editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0}}},X={args:{dataSource:wn,children:a.jsxs(cn,{children:[a.jsx(be,{headerText:"Employee Image",width:"180",textAlign:xe.Center,field:"EmployeeID"}),a.jsx(be,{headerText:"Employee Details",width:"300",textAlign:xe.Left,field:"FirstName"})]}),className:"row-template",toolbar:["Search"],selectionSettings:{mode:"Single"},searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0},height:"100%",rowTemplate:y=>{const ae=`https://npmci-react.syncfusion.com/development-react-ui/images/grid/${y.EmployeeID}.png`;return a.jsxs("tr",{className:"templateRow",children:[a.jsx("td",{className:"photo",children:a.jsx("img",{src:ae,alt:y.EmployeeID.toString()})}),a.jsx("td",{className:"details",children:a.jsxs("table",{className:"CardTable",cellPadding:3,cellSpacing:2,children:[a.jsxs("colgroup",{children:[a.jsx("col",{style:{width:"30%"}}),a.jsx("col",{style:{width:"10%"}})]}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{className:"CardHeader",children:"First Name"}),a.jsx("td",{children:":"}),a.jsx("td",{children:y.FirstName})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"CardHeader",children:"Last Name"}),a.jsx("td",{children:":"}),a.jsx("td",{children:y.LastName})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"CardHeader",children:"Title"}),a.jsx("td",{children:":"}),a.jsx("td",{children:y.Title})]})]})]})})]})}}},vn=[{field:"id"},{field:"username",width:150},{field:"age",width:80,type:"number"},{field:"bio",width:400}],Y={args:{localDataCount:1e5,isTextWrapData:!0,columns:vn,height:400,textWrapSettings:{enabled:!0,wrapMode:dn.Both}}},Z={args:{dataSource:new te({url:"https://ej2services.syncfusion.com/react/development/odata/GridInfiniteODataV4",adaptor:new un}),columns:[{field:"RecordId",headerText:"Record ID"},{field:"AssetGroup",headerText:"Asset Group"},{field:"HourlyCost",headerText:"Hourly Cost"},{field:"EstimatedHours",headerText:"Estimated Hours"},{field:"MaintenanceCost",headerText:"Maintenance Cost"},{field:"RequestedDate",headerText:"Requested Date"},{field:"PlannedDate",headerText:"Planned Date"},{field:"CompletionDate",headerText:"Completion Date"},{field:"Status",headerText:"Status"},{field:"RequestOrigin.Division",headerText:"Request Division"},{headerText:"Command Actions",width:200,getCommandItems:()=>[a.jsx(m,{type:h.Edit},"Edit"),a.jsx(m,{type:h.Delete},"Delete"),a.jsx(m,{type:h.Update},"Update"),a.jsx(m,{type:h.Cancel},"Cancel")]}],virtualizationSettings:{scrollMode:v.Infinite,enableCache:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0},searchSettings:{enabled:!0},toolbar:["Search"],pageSettings:{enabled:!1,pageSize:100,estimatedTotalRecordsCount:500,pageSizeControlledBy:"server"},height:"100%",editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0}}},ee={args:{serverPageSize:50,localDataCount:1e3,columns:N.slice(1,10),showColumnChooser:!0,isCustomBinding:!0,virtualizationSettings:{scrollMode:v.Infinite},sortSettings:{enabled:!0},filterSettings:{enabled:!0,enableFilterBarOperator:!0},searchSettings:{enabled:!0},toolbar:["Search","ColumnChooser"],pageSettings:{enabled:!1,pageSize:100,estimatedTotalRecordsCount:500,pageSizeControlledBy:"client"},editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0},height:"100%",aggregates:[{columns:(ie==null?void 0:ie[0].columns.slice(0,10))??[]}]}};var De,Ee,Te;_.parameters={..._.parameters,docs:{...(De=_.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    localDataCount: 100,
    columns: columns,
    // for makeData purpose mandatory
    // aggregates: aggregates,
    // isMultipleChildren: true,
    // children: (
    //     <>
    //         <Columns>
    //             {columns.map((col, index) => (
    //                 <Column key={index} {...col} />
    //             ))}
    //         </Columns>
    //         <Aggregates>{aggregates.map((row) => (
    //             <AggregateRow>{row.columns.map((col) => (
    //                 <AggregateColumn {...col} />
    //             ))}</AggregateRow>
    //         ))}</Aggregates>
    //     </>
    // ),
    // virtualizationSettings: { viewPortBuffer: {rows: 0} },
    // editSettings: { allowEdit: true, allowAdd: true, allowDelete: true, mode: 'Normal' },
    // toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    // searchSettings: { enabled: true },

    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    pageSettings: {
      enabled: true,
      pageSize: 20
    }
    // height: '100%',
    // showColumnChooser: true,
    // toolbar: ['Search', 'ColumnChooser','Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  }
}`,...(Te=(Ee=_.parameters)==null?void 0:Ee.docs)==null?void 0:Te.source}}};var Re,Ae,Ge;K.parameters={...K.parameters,docs:{...(Re=K.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    localDataCount: 2000000,
    columns: columns.slice(1, 11),
    // for makeData purpose mandatory
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Normal'
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    searchSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      enableFilterBarOperator: true
    },
    pageSettings: {
      enabled: true,
      pageSize: 2000000
    },
    height: '100%'
  }
}`,...(Ge=(Ae=K.parameters)==null?void 0:Ae.docs)==null?void 0:Ge.source}}};var ke,Me,qe;$.parameters={...$.parameters,docs:{...(ke=$.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    dataSource: new DataManager({
      // url: 'http://localhost:62869/api/UrlDataSource',
      // url: 'https://services.syncfusion.com/react/production/api/UrlDataSource',
      url: 'https://ej2services.syncfusion.com/js/development/api/UrlDataSource',
      adaptor: new UrlAdaptor()
    }),
    query: new Query().addParams('dataCount', '100').addParams('serverpagesize', '50'),
    // toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    // children: (<><Columns>
    //     <Column field='EmployeeID' visible={true} headerText='Employee ID' isPrimaryKey={true} width='130'></Column>
    //     <Column field='Employees' headerText='Employee Name' width='230' clipMode='EllipsisWithTooltip' />
    //     <Column field='Designation' headerText='Designation' width='170' clipMode='EllipsisWithTooltip' />
    //     <Column field='Mail' headerText='Mail' width='230'></Column>
    //     <Column field='Location' headerText='Location' width='140'></Column>
    //     <Column field='Status' headerText='Status' width='130'></Column>
    //     <Column field='Trustworthiness' headerText='Trustworthiness' width='160'></Column>
    //     <Column field='Rating' headerText='Rating' width='220' />
    //     <Column field='Software' headerText='Software Proficiency' width='180' format='C2' />
    //     <Column field='CurrentSalary' headerText='Current Salary' width='160' format='C2'></Column>
    //     <Column field='Address' headerText='Address' width='240' clipMode="EllipsisWithTooltip" ></Column>
    // </Columns>
    // <Aggregates>
    //     <AggregateRow>
    //         <AggregateColumn field='EmployeeID' type='Count' format='Employee Count: {Count}' />
    //         <AggregateColumn field='CurrentSalary' type='Sum' format='Total Salary: {Sum:C2}' />
    //     </AggregateRow>
    // </Aggregates>
    // </>),
    columns: [
    // { type: ColumnType.Checkbox, width: 50, allowFilter: false },
    {
      field: 'EmployeeID',
      visible: true,
      headerText: 'Employee ID',
      isPrimaryKey: true,
      width: '150'
    }, {
      field: 'Employees',
      headerText: 'Employee Name',
      width: '230',
      clipMode: 'EllipsisWithTooltip'
    }, {
      field: 'Designation',
      headerText: 'Designation',
      width: '170',
      clipMode: 'EllipsisWithTooltip'
    }, {
      field: 'Mail',
      headerText: 'Mail',
      width: '230'
    }, {
      field: 'Location',
      headerText: 'Location',
      width: '140'
    }
    // { field: 'Status', headerText: 'Status', width: '130' },
    // { field: 'Trustworthiness', headerText: 'Trustworthiness', width: '160' },
    // { field: 'Rating', headerText: 'Rating', width: '220' },
    // { field: 'Software', headerText: 'Software Proficiency', width: '180', format: 'C2' },
    // { field: 'CurrentSalary', headerText: 'Current Salary', width: '200', format: 'C2' },
    // { field: 'Address', headerText: 'Address', width: '240', clipMode: "EllipsisWithTooltip" },
    // {
    //     headerText: 'Command Actions',
    //     width: 200,
    //     getCommandItems: () => [
    //         <CommandItem key={'Edit'} type={CommandItemType.Edit} />,
    //         <CommandItem key={'Delete'} type={CommandItemType.Delete} />,
    //         <CommandItem key={'Update'} type={CommandItemType.Update} />,
    //         <CommandItem key={'Cancel'} type={CommandItemType.Cancel} />
    //     ]
    // }
    ],
    // aggregates: [{
    //     columns: [
    //         { field: 'EmployeeID', type: 'Count', footerTemplate: (args) => \`Employee Count: \${args.Count}\` },
    //         { field: 'CurrentSalary', type: 'Sum', format: 'C2', footerTemplate: (args) => \`Total Salary: \${args.Sum}\` }
    //     ]
    // }],
    selectionSettings: {
      mode: 'Single'
    },
    searchSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel'
    },
    virtualizationSettings: {
      enableCache: true,
      scrollMode: ScrollMode.Virtual
    },
    height: '100%',
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']
  }
}`,...(qe=(Me=$.parameters)==null?void 0:Me.docs)==null?void 0:qe.source}}};var Ie,Fe,Ve;J.parameters={...J.parameters,docs:{...(Ie=J.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    dataSource: new DataManager({
      url: 'https://ej2services.syncfusion.com/react/development/api/GridWebAPIService',
      adaptor: new WebApiAdaptor()
    }),
    columns: [{
      field: 'OrderID',
      headerText: 'OrderID',
      isPrimaryKey: true,
      width: '130',
      allowSearch: false
    }, {
      field: 'CustomerID',
      headerText: 'CustomerID',
      width: '230',
      clipMode: 'EllipsisWithTooltip'
    }, {
      field: 'ShipCity',
      headerText: 'ShipCity',
      width: '230'
    }, {
      field: 'EmployeeID',
      headerText: 'EmployeeID',
      width: '130',
      clipMode: 'EllipsisWithTooltip',
      allowSearch: false
    }, {
      field: 'EmployeeName',
      headerText: 'EmployeeName',
      width: '230',
      clipMode: 'EllipsisWithTooltip',
      allowSearch: false,
      allowFilter: false,
      allowSort: false
    }, {
      field: 'Designation',
      headerText: 'Designation',
      width: '230',
      clipMode: 'EllipsisWithTooltip',
      allowSearch: false,
      allowFilter: false,
      allowSort: false
    }, {
      field: 'CurrentSalary',
      headerText: 'CurrentSalary',
      width: '130',
      clipMode: 'EllipsisWithTooltip',
      allowSearch: false,
      allowFilter: false,
      allowSort: false
    }, {
      headerText: 'Command Actions',
      width: 200,
      getCommandItems: () => [<CommandItem key={'Edit'} type={CommandItemType.Edit} />, <CommandItem key={'Delete'} type={CommandItemType.Delete} />, <CommandItem key={'Update'} type={CommandItemType.Update} />, <CommandItem key={'Cancel'} type={CommandItemType.Cancel} />]
    }],
    selectionSettings: {
      mode: 'Single'
    },
    // toolbar: ['Search'],
    // searchSettings: { enabled: true }, //service not handled search substring with or condition only handled and multiple filter.
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    virtualizationSettings: {
      scrollMode: ScrollMode.Virtual
    },
    height: '100%',
    query: new Query().addParams('serverpagesize', '50'),
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true
    }
  }
}`,...(Ve=(Fe=J.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}};var ze,Oe,je;X.parameters={...X.parameters,docs:{...(ze=X.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    dataSource: employeeData,
    children: <Columns>\r
            <Column headerText='Employee Image' width='180' textAlign={TextAlign.Center} field='EmployeeID' />\r
            <Column headerText='Employee Details' width='300' textAlign={TextAlign.Left} field='FirstName' />\r
        </Columns>,
    className: 'row-template',
    toolbar: ['Search'],
    selectionSettings: {
      mode: 'Single'
    },
    searchSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    // virtualizationSettings: { scrollMode: ScrollMode.Virtual }, // server-remote data with dynamic rowheight not supported in competitors as well.
    height: '100%',
    rowTemplate: (props: typeof employeeData[0]) => {
      // Custom row template to display employee image and details.
      const src = \`https://npmci-react.syncfusion.com/development-react-ui/images/grid/\${props['EmployeeID']}.png\`;
      return <tr className="templateRow">\r
                    <td className="photo">\r
                        <img src={src} alt={props['EmployeeID'].toString()} />\r
                    </td>\r
                    <td className="details">\r
                        <table className="CardTable" cellPadding={3} cellSpacing={2}>\r
                            <colgroup>\r
                                <col style={{
                width: "30%"
              }} />\r
                                <col style={{
                width: "10%"
              }} />\r
                            </colgroup>\r
                            <tbody>\r
                                <tr>\r
                                    <td className="CardHeader">First Name</td>\r
                                    <td>:</td>\r
                                    <td>{props.FirstName}</td>\r
                                </tr>\r
                                <tr>\r
                                    <td className="CardHeader">Last Name</td>\r
                                    <td>:</td>\r
                                    <td>{props.LastName}</td>\r
                                </tr>\r
                                <tr>\r
                                    <td className="CardHeader">Title</td>\r
                                    <td>:</td>\r
                                    <td>{props.Title}</td>\r
                                </tr>\r
                            </tbody>\r
                        </table>\r
                    </td>\r
                </tr>;
    }
  }
}`,...(je=(Oe=X.parameters)==null?void 0:Oe.docs)==null?void 0:je.source}}};var Ue,We,Le;Y.parameters={...Y.parameters,docs:{...(Ue=Y.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    localDataCount: 100000,
    isTextWrapData: true,
    columns: muicolumns,
    height: 400,
    textWrapSettings: {
      enabled: true,
      wrapMode: WrapMode.Both
    }
  }
}`,...(Le=(We=Y.parameters)==null?void 0:We.docs)==null?void 0:Le.source}}};var He,Ne,Be;Z.parameters={...Z.parameters,docs:{...(He=Z.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    // localDataCount: 100,
    dataSource: new DataManager({
      // url: 'http://localhost:62869/odata/GridInfiniteODataV4',
      url: 'https://ej2services.syncfusion.com/react/development/odata/GridInfiniteODataV4',
      //?dataCount=200',
      adaptor: new ODataV4Adaptor()
    }),
    // if more columns included search query not working odata with large query 403 forbidden occurs
    columns: [{
      field: 'RecordId',
      headerText: 'Record ID'
    },
    // { field: 'AssetTag', headerText: 'Asset Tag' },
    {
      field: 'AssetGroup',
      headerText: 'Asset Group'
    },
    // { field: 'FacilitySection', headerText: 'Facility Section' },
    // { field: 'TechnicianNames', headerText: 'Technician Names' },
    // { field: 'SkillTier', headerText: 'Skill Tier' },
    {
      field: 'HourlyCost',
      headerText: 'Hourly Cost'
    }, {
      field: 'EstimatedHours',
      headerText: 'Estimated Hours'
    }, {
      field: 'MaintenanceCost',
      headerText: 'Maintenance Cost'
    }, {
      field: 'RequestedDate',
      headerText: 'Requested Date'
    }, {
      field: 'PlannedDate',
      headerText: 'Planned Date'
    }, {
      field: 'CompletionDate',
      headerText: 'Completion Date'
    },
    // { field: 'SafetyCheckRequired', headerText: 'Safety Check Required' },
    {
      field: 'Status',
      headerText: 'Status'
    }, {
      field: 'RequestOrigin.Division',
      headerText: 'Request Division'
    },
    // { field: 'RequestOrigin.ReferenceCode', headerText: 'Reference Code' }
    {
      headerText: 'Command Actions',
      width: 200,
      getCommandItems: () => [<CommandItem key={'Edit'} type={CommandItemType.Edit} />, <CommandItem key={'Delete'} type={CommandItemType.Delete} />, <CommandItem key={'Update'} type={CommandItemType.Update} />, <CommandItem key={'Cancel'} type={CommandItemType.Cancel} />]
    }],
    virtualizationSettings: {
      scrollMode: ScrollMode.Infinite,
      enableCache: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    searchSettings: {
      enabled: true
    },
    toolbar: ['Search'],
    pageSettings: {
      enabled: false,
      pageSize: 100,
      estimatedTotalRecordsCount: 500,
      pageSizeControlledBy: 'server'
    },
    height: '100%',
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true
    }
    // query: new Query().requiresCount()
  }
}`,...(Be=(Ne=Z.parameters)==null?void 0:Ne.docs)==null?void 0:Be.source}}};var Pe,Qe,_e;ee.parameters={...ee.parameters,docs:{...(Pe=ee.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    serverPageSize: 50,
    localDataCount: 1000,
    columns: columns.slice(1, 10),
    showColumnChooser: true,
    isCustomBinding: true,
    virtualizationSettings: {
      scrollMode: ScrollMode.Infinite
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      enableFilterBarOperator: true
    },
    searchSettings: {
      enabled: true
    },
    toolbar: ['Search', 'ColumnChooser'],
    pageSettings: {
      enabled: false,
      pageSize: 100,
      estimatedTotalRecordsCount: 500,
      pageSizeControlledBy: 'client'
    },
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true
    },
    height: '100%',
    aggregates: [{
      columns: aggregates?.[0].columns.slice(0, 10) ?? []
    }]
  }
}`,...(_e=(Qe=ee.parameters)==null?void 0:Qe.docs)==null?void 0:_e.source}}};const An=["LocalData","OverComeBrowserLimit","UrlAdaptorData","WebApiAdaptorData","RowTemplate","TextWrapSample","ODataV4Sample","CustomBindingSample"];export{ee as CustomBindingSample,_ as LocalData,Z as ODataV4Sample,K as OverComeBrowserLimit,X as RowTemplate,Y as TextWrapSample,$ as UrlAdaptorData,J as WebApiAdaptorData,An as __namedExportsOrder,Rn as default};
