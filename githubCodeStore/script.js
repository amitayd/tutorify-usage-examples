var accessToken = '641dfa2143facae4077274806a3a7b176cce553e',
    user = 'amitayd',
    repository = 'tutorify-playground',
    options = {};

var codeStore = Tutorify.GithubCodeStore.create(
    accessToken, user, repository, options);
    
var settings = {};
Tutorify.init(settings, codeStore)
