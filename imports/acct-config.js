var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
  },
  {
    _id: 'email',
    type: 'email',
    required: true,
    displayName: "email",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'Invalid email',
},
  {
    _id: "type",
    type: "radio",
    displayName: "aa",
    select: [
        {
        text: "Organization",
        value: "1",
      }, {
        text: "Student",
        value: "bb",
      },
    ],
},
pwd
]
);
