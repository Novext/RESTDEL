Meteor.methods({
    'createClient'(data){

        // check(data,{
        //     email:String,
        //     password:String,
        //     profile:Object
        // });

        data.profile.type = "Client";

        Accounts.createUser(data);
    }
})
