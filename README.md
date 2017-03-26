# Refract
## MVP
### Organization
- [x] Create account
- [x] Add account details
- [x] Create project
- [x] Add project details
- [x] Launch
- [ ] View students signed on? Or admin only?
### Students
- [x] Create account
- [ ] View live projects
- [ ] Apply to project

## Data Structure
![Data Structure](./data_structure3_1024.png?raw=true "Data Structure")

## Notes:
It is **essential** that you run `meteor remove autopublish` to develop
Eventually we will also run `meteor remove insecure` **but not yet**

### Important dependencies
Add more only as necessary. Update this list as necessary.
- [x] **useraccounts** account manager
- [x] **accounts-password** account manager flavor
- [ ] **aldeed:simple-schema** Schema manager
- [x] **reywood:publish-composite** Simple reactive join package _added but not currently used_
- [x] **twbs:bootstrap** Bootstrap package _added but not currently used_
- [ ] File Upload???

### Some resources
- [Useraccounts package README](https://github.com/meteor-useraccounts/core/blob/master/Guide.md)
- [Github Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links)
- [Meteor Methods vs Client Side Operations](https://www.discovermeteor.com/blog/meteor-methods-client-side-operations/)

### Forward
- Add logout. For now you can call `localStorage.clear()` in the console
- Add form error handling
- Someone will need to look into configuring routes. Research flow router, iron router, and [customizing routes with useraccounts](https://guide.meteor.com/accounts.html#useraccounts-customizing-routes)
- We will need to define server-side methods so that we can get rid of the 'insecure' package
- Adding profile info
- Defining schema for checking data
- File uploads
- Styling!
