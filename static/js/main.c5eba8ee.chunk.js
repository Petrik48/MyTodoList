(this.webpackJsonpmy_todo_list=this.webpackJsonpmy_todo_list||[]).push([[0],{193:function(t,o,e){},23:function(t,o,e){t.exports={todo:"todo_todo__2tcrk",notedTodo:"todo_notedTodo__1KcXh",todoButtonsWrapper:"todo_todoButtonsWrapper__3CWOV",todoMarkButton:"todo_todoMarkButton__209pj",todoDeleteButton:"todo_todoDeleteButton__1kbMU"}},240:function(t,o,e){"use strict";e.r(o);var n=e(8),d=e(97),r=e(96),c=e(103),a=e(24),s=e(46),u="ADD_TODO",i="TOGGLE_NOTED",l="DELETE_TODO",j={todos:[]},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,o=arguments.length>1?arguments[1]:void 0;switch(o.type){case i:return Object(a.a)(Object(a.a)({},t),{},{todos:t.todos.map((function(t){return t.id===o.id&&(t.noted=!t.noted),t}))});case u:return Object(a.a)(Object(a.a)({},t),{},{todos:[].concat(Object(c.a)(t.todos),[{text:o.todo,noted:!1,id:Math.random().toString(36).substr(2,9)}])});case l:return Object(a.a)(Object(a.a)({},t),{},{todos:t.todos.filter((function(t){return t.id!==o.id}))});default:return t}},p=Object(n.c)({todos:b,form:r.a}),O=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{},m=Object(n.d)(p,O,Object(n.a)(d.a));m.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(m.getState()))})),window.store=m;var _=m,h=(e(0),e(47)),x=e.n(h),f=(e(193),e(50)),g=e.n(f),N=e(5),T=function(t){return Object(N.jsx)("div",{className:g.a.header,children:Object(N.jsx)("div",{className:g.a.headerLogoWrapper,children:Object(N.jsx)("h1",{className:g.a.headerLogo,children:"MyTODOList"})})})},I=e(51),S=e.n(I),v=e(94),B=e(95),F=e(15),L=function(t){return Object(N.jsxs)("form",{className:S.a.todoInputForm,onSubmit:t.handleSubmit,children:[Object(N.jsx)(v.a,{className:S.a.todoInput,name:"todoInput",component:"input",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0435\u043b\u043e"}),Object(N.jsx)("button",{className:S.a.todoButton,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u0435\u043b\u043e"})]})};L=Object(B.a)({form:"TodoInputForm"})(L);var y=Object(F.b)(null,{addTodo:function(t){return function(o){o(function(t){return{type:u,todo:t}}(t)),o(Object(s.a)("TodoInputForm"))}}})((function(t){return Object(N.jsx)(L,{onSubmit:function(o){o.todoInput&&t.addTodo(o.todoInput)}})})),D=e(99),k=e.n(D),w=e(23),E=e.n(w),M=e(100),W=e.n(M),J=function(t){return Object(N.jsx)(W.a,{left:!0,opposite:!0,children:Object(N.jsxs)("div",{className:"".concat(E.a.todo," ").concat(t.noted&&E.a.notedTodo),children:[Object(N.jsx)("p",{className:E.a.todosText,children:t.todosText}),Object(N.jsxs)("div",{className:E.a.todoButtonsWrapper,children:[Object(N.jsx)("button",{className:E.a.todoMarkButton,onClick:function(){t.toggleNoted(t.id)},children:"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0434\u0435\u043b\u043e"}),Object(N.jsx)("button",{className:E.a.todoDeleteButton,onClick:function(){t.deleteTodoFromState(t.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0434\u0435\u043b\u043e"})]})]})})},C=Object(F.b)((function(t){return{todos:t.todos.todos}}),{toggleNoted:function(t){return{type:i,id:t}},deleteTodoFromState:function(t){return{type:l,id:t}}})((function(t){var o=t.todos.map((function(o){return Object(N.jsx)(J,{todosText:o.text,id:o.id,noted:o.noted,toggleNoted:t.toggleNoted,deleteTodoFromState:t.deleteTodoFromState},o.id)}));return Object(N.jsx)("div",{className:k.a.todoList,children:o})}));var G=function(t){return Object(N.jsxs)("div",{className:"app",children:[Object(N.jsx)(T,{}),Object(N.jsx)(y,{}),Object(N.jsx)(C,{})]})},K=e(102);x.a.render(Object(N.jsx)(K.a,{children:Object(N.jsx)(F.a,{store:_,children:Object(N.jsx)(G,{})})}),document.getElementById("root"))},50:function(t,o,e){t.exports={header:"header_header__8nWKB",headerLogo:"header_headerLogo__3aVOh"}},51:function(t,o,e){t.exports={todoInputForm:"todoInputForm_todoInputForm__gp4uI",todoInput:"todoInputForm_todoInput__13hwQ",todoButton:"todoInputForm_todoButton__YLuf_"}},99:function(t,o,e){t.exports={todoList:"todoList_todoList__3Gm-6"}}},[[240,1,2]]]);
//# sourceMappingURL=main.c5eba8ee.chunk.js.map