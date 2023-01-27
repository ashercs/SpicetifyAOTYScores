# AlbumOfTheYear Score Spotify extension

Extension for [Spicetify](https://github.com/spicetify/spicetify-cli) to display the AOTY user score of an album/single on spotify.

<p align="center">
  <img alt="preview" src="./assets/example.png">
</p>

# Installation

### Marketplace

You can easily install this extension from the [Spicetify Marketplace](https://github.com/spicetify/spicetify-marketplace).

### Manual

Download [aoty.js](./aoty.js?raw=1) and place it inside your Spicetify extensions folder:

| Platform            | Path                                   |
| ------------------- | -------------------------------------- |
| **Linux**/**MacOS** | `~/.config/spicetify/Extensions`       |
| **Windows**         | `%userprofile%\.spicetify\Extensions\` |

After putting the extension file in your extensions folder, run the following commands to enable the extension and apply the changes:

```
spicetify config extensions aoty.js
spicetify apply
```
