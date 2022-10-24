export default importAll(require.context('../../video', true, /\.(mp4)$/));

function importAll (r) {
    const videos = {};

    r.keys().map(function(item, index){
        let key = r.keys()[index];
        return videos[key.substring(key.lastIndexOf('/')+1)] = r.keys().map(r)[index];
    })
    return videos;
}