let chunk = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let chunk in e.c)m.push(e.c[chunk])}]),m);
let user = chunk.find(m=>m?.exports?.default?.getCurrentUser).exports.default.getCurrentUser();
let userProfile = chunk.find(m=>m?.exports?.default?.getUserProfile).exports.default;
function getBadges(){
    let profile = userProfile.getUserProfile(user.id);
    profile.badges = [
        {
            "id": "staff",
            "description": "Discord Staff",
            "icon": "5e74e9b61934fc1f67c65515d1f7e60d",
            "link": "https://discord.com/company"
        },
        {
            "id": "partner",
            "description": "Partnered Server Owner",
            "icon": "3f9748e53446a137a052f3454e2de41e",
            "link": "https://discord.com/partners"
        },
        {
            "id": "certified_moderator",
            "description": "Moderator Programs Alumni",
            "icon": "fee1624003e2fee35cb398e125dc479b",
            "link": "https://discord.com/safety"
        },
        {
            "id": "hypesquad",
            "description": "HypeSquad Events",
            "icon": "bf01d1073931f921909045f3a39fd264",
            "link": "https://discord.com/hypesquad"
        },
        {
            "id": "hypesquad_house_3",
            "description": "HypeSquad Balance",
            "icon": "3aa41de486fa12454c3761e8e223442e",
            "link": "https://discord.com/settings/hypesquad-online"
        },
        {
            "id": "bug_hunter_level_2",
            "description": "Discord Bug Hunter",
            "icon": "848f79194d4be5ff5f81505cbd0ce1e6",
            "link": "https://support.discord.com/hc/en-us/articles/360046057772-Discord-Bugs"
        },
        {
            "id": "active_developer",
            "description": "Active Developer",
            "icon": "6bdc42827a38498929a4920da12695d9",
            "link": "https://support-dev.discord.com/hc/en-us/articles/10113997751447?ref=badge"
        },
        {
            "id": "verified_developer",
            "description": "Early Verified Bot Developer",
            "icon": "6df5892e0f35b051f8b61eace34f4967"
        },
        {
            "id": "early_supporter",
            "description": "Early Supporter",
            "icon": "7060786766c9c840eb3019e725d2b358",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "premium",
            "description": "Subscriber since Dec 22, 2016",
            "icon": "2ba85e8026a8614b640c2837bcdfe21b",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl9",
            "description": "Server boosting since Sep 6, 2019",
            "icon": "ec92202290b48d0879b7413d2dde3bab",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "legacy_username",
            "description": "Originally known as " + profile.legacyUsername ,
            "icon": "6de6d34650760ba5551a79732e98ed60"
        }, // You must turn "Legacy Username Badge" on from Profiles settings.
        {
            "id": "application_guild_subscription",
            "description": "This server has " + user.username + " Premium",
            "icon": "d2010c413a8da2208b7e4f35bd8cd4ac"
        }
    ];

    console.log("done!, Check Your Profile\nNote: if you can't find the badges!, Just resend 'getBadges()' in the console");
}

getBadges(); // ☕
