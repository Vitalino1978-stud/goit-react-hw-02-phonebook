(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(e,t,n){},2:function(e,t,n){e.exports={ContactForm:"ContactForm_ContactForm__Detex",label:"ContactForm_label__3FxxG",input_name:"ContactForm_input_name__j6zeA",add_btn:"ContactForm_add_btn__3uWyS"}},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),i=n.n(c),o=n(12),s=n(5),l=n(6),u=n(8),d=n(7),m=(n(17),n(0)),b=function(e){var t=e.contacts,n=e.deleteContact;return Object(m.jsx)("ul",{className:"contact-list",children:t.map((function(e){return Object(m.jsxs)("li",{className:"contact-list-item",children:[Object(m.jsx)("p",{children:e.name}),Object(m.jsx)("p",{children:e.number}),Object(m.jsx)("button",{type:"button",onClick:function(){return n(e.id)},children:"Delete contact"})]})}))})},h=n(11),j=n(3),p=n.n(j),f=n(2),O=n.n(f),C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.nameInputId=p.a.generate(),e.numberInputId=p.a.generate(),e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e.reset=function(){e.setState({name:"",number:""})},e.handleSubmit=function(t){t.preventDefault(),e.props.onAdd(e.state),e.reset()},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{onSubmit:this.handleSubmit,className:O.a.ContactForm,children:[Object(m.jsxs)("label",{className:O.a.label,children:["Name:",Object(m.jsx)("input",{id:this.nameInputId,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,className:O.a.input_name,placeholder:"Input name"})]}),Object(m.jsxs)("label",{label:!0,className:O.a.label,children:["Phone number:",Object(m.jsx)("input",{id:this.numberInputId,type:"number",name:"number",value:this.state.number,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,className:O.a.input_name,placeholder:"Input number"})]}),Object(m.jsx)("button",{type:"submit",className:O.a.add_btn,children:"Add contact"})]})}}]),n}(a.Component),x=(n(27),function(e){var t=e.valueState,n=e.filterByName;return Object(m.jsx)("label",{className:"label",children:Object(m.jsx)("input",{type:"text",value:t,onChange:n})})}),v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return t!==e.id}))}}))},e.addContact=function(t){var n=t.name,a=t.number;if(e.state.contacts.some((function(e){return e.name===n})))alert("".concat(n," is already in contacts."));else{var r={id:p.a.generate(),name:n,number:a};e.setState((function(e){return{contacts:[r].concat(Object(o.a)(e.contacts))}}))}},e.filter=function(t){e.setState({filter:t.currentTarget.value})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.filter.toLowerCase(),t=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(C,{onAdd:this.addContact}),Object(m.jsx)(b,{contacts:t,deleteContact:this.deleteContact}),Object(m.jsx)(x,{valueState:this.state.filter,filterByName:this.filter})]})}}]),n}(a.Component);i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.3fc2d7df.chunk.js.map