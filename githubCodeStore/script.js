var accessToken = null, // Change this to a valid token and repository to gain authorization
                        //(see https://github.com/settings/applications#personal-access-tokens)
    user = 'amitayd',
    repository = 'tutorify-playground',
    options = {};

var codeStore = Tutorify.GithubCodeStore.create(
    accessToken, user, repository, options);
    
var settings = {};
Tutorify.init(settings, codeStore)
