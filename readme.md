
# An API Wrapper for [LastFM API](https://www.last.fm/api#getting-started)

A series of tools to facilitate interaction with the LastFM API. It uses your API Key as a form of authentication.

## Installation

Via NPM:

```bash
$ npm install homura-js
```
    
## Features:
**Album**
- `getInfo()`: Get the metadata and tracklist for an album on Last.fm using the album name.
- `getTags()`: Get the tags applied by an individual user to an album on Last.fm. 
- `getTopTags()`: Get the top tags for an album on Last.fm, ordered by popularity.
- `search()`: Search for an album by name. Returns album matches sorted by relevance.

**Artist**
- `getInfo()`: Get the metadata for an artist.
- `getSimilar()`: Get all the artists similar to this artist.
- `getTags()`: Get the tags applied by an individual user to an artist on Last.fm.
- `getTopTags()`: Get the top tags for an album on Last.fm, ordered by popularity.
- `getTopAlbum()`: Get the top albums for an artist on Last.fm, ordered by popularity.
- `getTopTracks()`: Get the top tracks by an artist on Last.fm, ordered by popularity.
- `search()`: Search for an artist by name. Returns artist matches sorted by relevance.

**Users**
- `getFriends()`: Get a list of the user's friends on Last.fm.
- `getInfo()`: Get information about a user profile.
- `getLovedTracks()`: Get the last 50 tracks loved by a user.
- `getRecentTracks()`: Get a list of the recent tracks listened to by this user. 
- `getTopAlbums()`: Get the top albums listened to by a user. You can stipulate a time period.
- `getTopTracks()`: Get the top tracks listened to by a user. You can stipulate a time period.

**Geo**
- `getTopArtists()`: Get the most popular artists on Last.fm by country.
- `getTopTracks()`: Get the most popular tracks on Last.fm last week by country

**Track**
- `search()`: Search for a track by track name. Returns track matches sorted by relevance.
- `getInfo()`: Get the metadata for a track on Last.fm using the artist/track name or a musicbrainz id.
## Example

```javascript
import Homura from 'homura-js';

const Wrapper = new Homura("YOUR API KEY");
let result = await Wrapper.artist.getTopTracks("Clairo", 5)
result.toptracks.track.forEach(track => {console.log(track.name)})

👉 Output: 
    - Sofia
    - Pretty Girl
    - Bags
    - Flaming Hot Cheetos
    - Harbor
```


## Running Tests

You can test the Wrapper by running this command: 
```bash
# Before running the tests, check that they have your API key.

$ npm run test
```

## Security

If you discover any security related issues, please send me a message on Discord - Seiku#0666.

## License

The MIT License (MIT). Please see LICENSE for more information.

![Stay Positive](https://i.pinimg.com/originals/1f/88/bc/1f88bc38e2daa3c4c309608222a97b40.jpg)