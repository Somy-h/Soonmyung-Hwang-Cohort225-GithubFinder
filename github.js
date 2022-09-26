class GitHub {
  constructor() {
    this.client_id = 'f45cd9f72f2f4309b30e';
    this.client_secrets = 'bff6d3199dad90d30c5cd7da8da3976d28d18deb';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secrets=${this.client_secrets}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secrets=${this.client_secrets}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return { 
      profile,
      repos
    };
  }
}