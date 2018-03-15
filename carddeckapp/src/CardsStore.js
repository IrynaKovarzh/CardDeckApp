const CardsData =
    [
        {
            'name': 'Dragons',
            'description': 'test deck 1abc',

            'back-image': 'Images/BackTexture1.png',

            'cards': [
                {
                    'front-image': 'Images/S9L1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/S10L1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/SAL1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/SJL1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/SKL1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/SQL1.png',
                    'text': ''
                }
            ]
        },
        {
            'name': 'Treasure',
            'description': 'test deck 2',

            'back-image': 'Images/BackTexture1.png',

            'cards': [
                {
                    'front-image': 'Images/S9L1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/S10L1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/SAL1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/SJL1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/SKL1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/SQL1.png',
                    'text': ''
                }
            ]
        }
    ];

function getAll() {
    return CardsData;
}

class CardsStore {

    getAll() {
        return getAll();
    }
}

// export singleton
export default new CardsStore();