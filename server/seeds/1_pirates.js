exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('pirates').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('pirates').insert({
                    id: 1,
                    name: 'Anne Bonney',
                    poison: 'Rum',
                    accessory: 'hot temper',
                    image_url: 'http://2.bp.blogspot.com/-WSKMEi_MH5U/U-AdUnMNuvI/AAAAAAAABI8/fv0BXLICx8c/s1600/Anne_Bonny_color.jpg'
                }),
                knex('pirates').insert({
                    id: 2,
                    name: 'One Eyed Willie',
                    poison: 'Whiskey',
                    accessory: 'eye patch',
                    image_url: 'http://i261.photobucket.com/albums/ii49/MGY/BekCamFone/2560455b-d657-4cb2-a612-db65b9464618_zps75aa6df2.jpg'
                }),
                knex('pirates').insert({
                    id: 3,
                    name: 'Blackbeard',
                    poison: 'Rum',
                    accessory: 'peg leg',
                    image_url: 'https://kw75900.files.wordpress.com/2008/10/blackbeard_uy1q3.jpg'
                })
            ]);
        });
};
