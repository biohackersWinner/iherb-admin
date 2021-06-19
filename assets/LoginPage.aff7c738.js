import{n,i as o,j as l,B as a}from"./vendor.86819600.js";import{F as r,a as u,R as s}from"./common.df3a6644.js";import{F as t}from"./FormInput.1201506c.js";const e=n.form`
  width: 500px;
  margin: 200px auto 0 auto;
`,i=n.h1`
  margin-left: 200px;
`;function m(){const n=o();function m(){console.log(1),n.push("/")}return l(s,{onSubmit:m,render:({handleSubmit:n})=>l(e,{onSubmit:n},l(i,null,"Вход"),l(r,null,l(u,null,"Логин"),l(t,{name:"login",size:"large"})),l(r,null,l(u,null,"Пароль"),l(t,{name:"password",size:"large"})),l(r,null,l(u,null),l(a,{size:"large",onClick:m},"Войти")))})}function f(){return l(m,null)}export default f;
