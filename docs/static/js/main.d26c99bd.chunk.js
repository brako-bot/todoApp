(this.webpackJsonpdesdecero=this.webpackJsonpdesdecero||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('{"a":[{"tittle":"welcom to Dashboard","responsible":"app dev","description":"you can create new task wiht te lateral form, no have limit","priority":"low"}]}')},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),i=n.n(a),c=n(9),o=n.n(c),r=(n(17),n(11)),l=n(3),d=n(4),h=n(2),u=n(6),j=n(5),p=(n(18),n(19),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"navigation-absolute",children:Object(s.jsxs)("nav",{className:"navbar",children:[Object(s.jsx)("p",{className:"tittle",children:this.props.tittle}),Object(s.jsx)("p",{className:"ntasks",children:this.props.ntareas})]})})}}]),n}(a.Component)),b=(n(20),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={index:""},e.removeTask=e.removeTask.bind(Object(h.a)(e)),e}return Object(d.a)(n,[{key:"changeCard",value:function(e){this.setState({index:parseInt(e.target.id)}),console.log("removing...",this.state.index)}},{key:"removeTask",value:function(e){this.setState({index:parseInt(e.target.id)}),this.props.onRemove(this.state.index),console.log("removing...",this.state.index)}},{key:"render",value:function(){var e=this;return Object(s.jsx)("section",{className:"tasks-container",children:this.props.data.map((function(t,n){return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsxs)("div",{className:"tittle-task",children:[Object(s.jsx)("h3",{children:t.tittle}),Object(s.jsx)("p",{className:t.priority,children:t.priority})]}),Object(s.jsx)("div",{className:"info-container",children:Object(s.jsx)("p",{className:"description",children:t.description})}),Object(s.jsx)("p",{className:"responsible",children:t.responsible}),Object(s.jsx)("button",{className:"remove",id:n,onClick:e.removeTask,onMouseOver:e.changeCard.bind(e),children:"Delete"})]},n)}))})}}]),n}(a.Component)),m=n(10),O=(n(21),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={tittle:"",descrption:"",responsible:"",priority:"low"},e.handleInput=e.handleInput.bind(Object(h.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e}return Object(d.a)(n,[{key:"handleInput",value:function(e){var t=e.target,n=t.value,s=t.name;this.setState(Object(m.a)({},s,n)),console.log(this.state)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onAddTask(this.state),console.log(this.state)}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"form-container",children:Object(s.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(s.jsx)("input",{type:"text",name:"tittle",onChange:this.handleInput,className:"input-for-user",placeholder:"Task Tittle"}),Object(s.jsx)("input",{type:"text",name:"responsible",onChange:this.handleInput,className:"input-for-user",placeholder:"Responsible"}),Object(s.jsx)("textarea",{type:"text",name:"description",onChange:this.handleInput,className:"input-for-user",placeholder:"Description"}),Object(s.jsxs)("select",{type:"text",name:"priority",onChange:this.handleInput,className:"input-for-user",placeholder:"Task Tittle",children:[Object(s.jsx)("option",{children:"low"}),Object(s.jsx)("option",{children:"medium"}),Object(s.jsx)("option",{children:"high"})]}),Object(s.jsx)("button",{className:"button input-for-user",children:"Create Task"})]})})}}]),n}(a.Component)),v=n(7);console.log(v.a);var f=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={title:"Gestor de tareas",todos:v.a},e.handleAddtask=e.handleAddtask.bind(Object(h.a)(e)),e.removeTask=e.removeTask.bind(Object(h.a)(e)),e}return Object(d.a)(n,[{key:"handleAddtask",value:function(e){this.setState({todos:[].concat(Object(r.a)(this.state.todos),[e]),numeroTareas:v.a.length})}},{key:"removeTask",value:function(e){console.log(e),this.setState({todos:this.state.todos.filter((function(t,n){return n!==e}))})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(p,{tittle:this.state.title,ntareas:this.state.todos.length}),Object(s.jsxs)("div",{className:"app-container",children:[Object(s.jsx)(O,{className:"div-form",onAddTask:this.handleAddtask}),Object(s.jsx)(b,{data:this.state.todos,className:"div-tasks",onRemove:this.removeTask})]})]})}}]),n}(a.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),x()}],[[22,1,2]]]);
//# sourceMappingURL=main.d26c99bd.chunk.js.map