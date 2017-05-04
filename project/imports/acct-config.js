
var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
    // {
    //     _id: "username",
    //     type: "text",
    //     displayName: "username",
    //     required: true,
    //     minLength: 5,
    // },
    {
        _id: 'firstname',
        type: 'text',
        displayName: "First Name",
        required: true,
        errStr: 'Only "Full Name" allowed!',
    },
    {
        _id: 'lastname',
        type: 'text',
        displayName: "Last Name",
        required: true,
        errStr: 'Only "Full Name" allowed!',
    },
    {
        _id: "email",
        type: "email",
        required: true,
        displayName: "email",
        re: /.+@(.+){2,}\.(.+){2,}/,
        errStr: "Invalid email",
    },
    {
        _id: "type",
        type: "radio",
        required: true,
        displayName: "Account type:",
        select: [
            {
                text: "Organization",
                value: "aa",
            }, {
                text: "Student",
                value: "bb",
            }//, {
                //     text: "Faculty",
                //     value: "cc",
                // },
            ],
        },
        pwd
    ]
);

AccountsTemplates.configure({
    onSubmitHook: function(){
        Session.set('template_loaded', 'profile_edit');
    }
});

// Validate username, without a specific error message.
// Accounts.validateNewUser((user) => {
//   return user.username !== 'root';
// });

// Accounts.config({ restrictCreationByEmailDomain: 'loop.colum.edu' });
