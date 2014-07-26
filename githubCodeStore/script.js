var accessToken = '641dfa2143facae4077274806a3a7b176cce553e', // try changing this to null for read-only
    user = 'amitayd',
    repository = 'tutorify-playground',
    options = {};

var codeStore = Tutorify.GithubCodeStore.create(
    accessToken, user, repository, options);
    
var settings = {};
Tutorify.init(settings, codeStore)
