# Heroku

```bash
heroku git:remote -a green-gorilla // when `fatal: 'heroku' does not appear to be a git repository`

git push heroku `git subtree push --prefix packages/green-gorilla-site heroku master`:master --force // when `Updates were rejected because the tip of your current branch is behind`
```

Also: [Git subtree - subtree up-to-date but can't push](https://stackoverflow.com/questions/13756055/git-subtree-subtree-up-to-date-but-cant-push)

```
git push heroku `git subtree split --prefix packages/green-gorilla-site master`:master --force // when `Updates were rejected because the tip of your current branch is behind`
```
