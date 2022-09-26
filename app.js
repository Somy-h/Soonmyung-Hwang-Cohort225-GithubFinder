class App {

  constructor() {
    this.github = new GitHub();
    this.ui = new UI();
    this.setup();
  }

  setup() {
    const searchUser = document.getElementById('searchUser');
    searchUser?.addEventListener('keyup', (e) => {
      const userText = e.target.value.trim();

      if(userText !== '') {
        this.github.getUser(userText)
          .then(data => {
            console.log(data);
            if (data.profile.message === 'Not Found') {
              this.ui.showAlert('User not found', 'alert alert-danger');
            } else {
              console.log(data);
              // show profile & repos
              this.ui.showProfile(data.profile);
              this.ui.showRepos(data.repos);
            }
          });
      } else {
        // Clear profile
        this.ui.clearProfile();
      }
    })
  }
}

window.onload = () => new App();