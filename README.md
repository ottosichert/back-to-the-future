# back-to-the-future
Slides for my talk at DublinCSS Hacktoberfest 2019


## Development

```
git clone https://github.com/ottosichert/back-to-the-future
yarn
yarn start
```

Go to http://http://localhost:3000

Docs here: https://formidable.com/open-source/spectacle/

## Deployment

```
yarn build
```

Insert following lines before `</body></html>`:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-bash.min.js" integrity="sha256-W7l8nP5GgjHSb7BvkoJKZQ+6+qFPM2VT6aF1lISibsA=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-css.min.js" integrity="sha256-mVHVEQoDvF2t7a6kQxvHdS7YDnfxu9XHx8kh/g9gY/k=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-git.min.js" integrity="sha256-8J6flH/bvIH0PaeXKSx1V6fzaN0auFyTubqXL90ViIs=" crossorigin="anonymous"></script>
```

Deploy to gh-pages

```
yarn deploy
```
