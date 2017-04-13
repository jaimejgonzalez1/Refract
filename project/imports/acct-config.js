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
    displayName: "Choose:",
    select: [
        {
        text: "Organization",
        value: "aa",
      }, {
        text: "Student",
        value: "bb",
      }, {
        text: "Faculty",
        value: "cc",
      },
    ],
},
pwd
]
);
