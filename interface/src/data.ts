type Aresta = {
    ponto: number,
    peso: number
}

interface Cachorro {
    dados: {
        nome: string,
        imageURL: string,
    },
    arestas: Aresta[]
}

export const cachorros: Cachorro[] = [
    // 0 Alaskan Malamute
    {
        dados: {
            nome: "Alaskan Malamute",
            imageURL: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/09151112/Alaskan-Malamute-walking-in-a-field1.jpg"
        },
        arestas: [
            {
                ponto: 32,
                peso: 68.2
            },
            {
                ponto: 68,
                peso: 23.0
            },
            {
                ponto: 25,
                peso: 8.7
            }
        ]
    },

    // 1 Airedale Terrier
    {
        dados: {
            nome: "Airedale Terrier",
            imageURL: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/02165956/Airedale-Terrier-standing-stacked-outdoors.jpg"
        },
        arestas: [
            // Giant Schnauzer
            {
                ponto: 33,
                peso: 4.7
            },

            // Nova Scotia Duck Tolling Retrievier
            {
                ponto: 51,
                peso: 1.8
            },

            // Sheltie 
            {
                ponto: 65,
                peso: 1.3
            },

            // Irish Terrier 
            {
                ponto: 48,
                peso: 3.7
            },

            // Yorkshire Terrier 
            {
                ponto: 88,
                peso: 3.6
            },

            // Black Russian Terrier 
            {
                ponto: 14,
                peso: 8
            },

            // Australian Sheperd
            {
                ponto: 6,
                peso: 1.1   
            },

            // Golden Retriever
            {
                ponto: 31,
                peso: 1.3  
            },

            // West Highland white terrier
            {
                ponto: 82,
                peso: 1.7  
            },

            // Toy Manchester Terrier
            {
                ponto: 78,
                peso: 1.5  
            },

            // Kelpie
            {
                ponto: 44,
                peso: 1.3  
            },
        ]
    },

    // 2 Akita
    {
        dados: {
            nome: "Akita",
            imageURL: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/06153939/Akita-head-portrait-outdoors1.jpg"
        },
        arestas: [
            // Japanese Chin
            {
                ponto: 42,
                peso: 2
            },

            // Shiba inu
            {
                ponto: 42,
                peso: 2
            },
        ]
    },

    // 3 American Stanfordshire Terrier
    {
        dados: {
            nome: "American Stanfordshire Terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/AmStaff.01.jpg"
        },
        arestas: [
            // Boxer
            {
                ponto: 17,
                peso: 2.2
            },

            // Bulldog
            {
                ponto: 19,
                peso: 3.2
            },

            // Bull terrier
            {
                ponto: 20,
                peso: 5.7
            },

            // Dogue de Bourdeaux
            {
                ponto: 28,
                peso: 1.3
            },

            // Stafordshire bull terrier
            {
                ponto: 70,
                peso: 3.9
            },
        ]
    },

    // 4 American Cocker Spaniel
    {
        dados: {
            nome: "American Cocker Spaniel",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Cocker-Spaniel-on-White-12.jpg"
        },
        arestas: [
            // Nova Scotia Duck Tolling Retriever
            {
                ponto: 50,
                peso: 3.5
            },
        ]
    },

    // 5 Terrier americano sem pelo
    {
        dados: {
            nome: "Terrier americano sem pelo",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/American-Hairless-Terrier-standing-in-the-grass-on-lead.jpg"
        },
        arestas: [
            // Chihuahua
            {
                ponto: 24,
                peso: 1.2
            },

            // Toy Manchester Terrier
            {
                ponto: 78,
                peso: 2.1
            },

            // Parson Russel Terrier
            {
                ponto: 52,
                peso: 1.2
            },

            // Toy Fox Terrier
            {
                ponto: 77,
                peso: 2.2
            },

            // Jack Russel Terrier
            {
                ponto: 41,
                peso: 1.5
            },

            // Wirefox Terrier
            {
                ponto: 84,
                peso: 3.5
            },
        ]
    },

    // 6 Pastor Australiano
    {
        dados: {
            nome: "Pastor Australiano",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Australian-Shepherd.1.jpg"
        },
        arestas: [
            // Pastor alemão
            {
                ponto: 51,
                peso: 2.2
            },

            // Pembroke welsh corgi
            {
                ponto: 54,
                peso: 1.8
            },

            // Chinook
            {
                ponto: 25,
                peso: 2.7   
            },

            // Kelpie
            {
                ponto: 44,
                peso: 2.4  
            },

            // Airedale Terrier
            {
                ponto: 1,
                peso: 1.1  
            },

            // Shelti
            {
                ponto: 65,
                peso: 6.9
            },

            // Collie
            {
                ponto: 26,
                peso: 13.8
            },
            
             // Cardigan Welsh Corgi
             {
                ponto: 23,
                peso: 2.2
            },
        ]
    },

    // 7 Basset Hound
    {
        dados: {
            nome: "Basset Hound",
            imageURL: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/07200501/Basset-Hound-standing-in-the-garden.jpg"
        },
        arestas: [
            // Redbone coonhound
            {
                ponto: 61,
                peso: 3.2
            },

            // Fox hound
            {
                ponto: 30,
                peso: 3.1
            },

            // Beagle
            {
                ponto: 8,
                peso: 3.2
            },
        ]
    },
    
    // 8 Beagle
    {
        dados: {
            nome: "Beagle",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Beagle-standing-in-profile-looking-up-in-the-yard.jpg"
        },
        arestas: [
            // Redbone coonhound
            {
                ponto: 61,
                peso: 12.5
            },

            // Fox hound
            {
                ponto: 30,
                peso: 13.6
            },

            // Basset Hound
            {
                ponto: 7,
                peso: 3.2
            },
        ]
    },  

    // 9 Pastor-belga Malinois
    {   
        dados: {
            nome: "Pastor-belga Malinois",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Belgian-Malinois.1.jpg"
        },
        arestas: [
            // Pastor Alemão
            {
                ponto: 52,
                peso: 9.1
            },

            // Pastor Belga tervuren
            {
                ponto: 10,
                peso: 20.3
            },

            // Chinook
            {
                ponto: 25,
                peso: 2.4
            },

            // Xoloitzcuintle 
            {
                ponto: 86,
                peso: 1
            },

            // Pastor da Picardia 
            {
                ponto: 12,
                peso: 6
            },
        ]
    },

    // 10 Pastor-belga Teruven
    {
        dados: {
            nome: "Pastor-belga Teruven",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Belgian-Tervuren.3.jpg"
        },
        arestas: [
            // Pastor-belga Malinois
            {
                ponto: 9,
                peso: 20.3
            },

            // Pastor da Picardia 
            {
                ponto: 12,
                peso: 5
            },
        ]
    },

    // 11 Bearded Collie
    {
        dados: {
            nome: "Bearded Collie",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Bearded-Collie-standing-in-the-grass.jpg"
        },
        arestas: [
            // Pembroke Welsh Corgi
            {
                ponto: 54,
                peso: 4.3
            },

            // Chinook
            {
                ponto: 25,
                peso: 1.2
            },

            // Retriever da Nova Escócia
            {
                ponto: 50,
                peso: 1.2
            },

            // Sheltie
            {
                ponto: 65,
                peso: 6.1
            },

            // Collie
            {
                ponto: 26,
                peso: 14.1
            },

            // Pastor Australiano
            {
                ponto: 6,
                peso: 3.3
            },

            // Cardigan Welsh Corgi
            {
                ponto: 23,
                peso: 4.2
            },

            // Kelpie
            {
                ponto: 44,
                peso: 8.9
            },
        ]
    },

    // 12 Pastor da Picardia
    {
        dados: {
            nome: "Pastor da Picardia",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Berger-Picard-standing-in-a-field.jpg"
        },
        arestas: [
            // Pastor Alemão
            {
                ponto: 52,
                peso: 29.1
            },

            // Xoloitzcuntli 
            {
                ponto: 86,
                peso: 3.7
            },

            // Chinook 
            {
                ponto: 25,
                peso: 10.3
            },

            // Leonberger 
            {
                ponto: 46,
                peso: 3.5
            },

            // Doberman 
            {
                ponto: 87,
                peso: 1.3
            },

            // Cão de água português     
            {
                ponto: 59,
                peso: 3
            },
        ]
    },

    // 13 Benese mountain
    {
        dados: {
            nome: "Bernese mountain",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Bernese-Mountain-Dog-head-portrait-outdoors.jpg"
        },
        arestas: [
            // São Bernard
            {
                ponto: 63,
                peso: 7.1
            },

            // Terrier preto da Rússia
            {
                ponto: 14,
                peso: 1.3
            },

            // Leonberger
            {
                ponto: 46,
                peso: 2.7
            },
        ]
    },

    // 14 Terrier preto da Rússia
    {
        dados: {
            nome: "Terrier preto da Rússia",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Black-Russian-Terrier-standing-outdoors.jpg"
        },
        arestas: [
            // Rottweiler
            {
                ponto: 62,
                peso: 43
            },

            // Schnauzer Gigante
            {
                ponto: 62,
                peso: 32
            },

            // Leonberger
            {
                ponto: 46,
                peso: 2.5
            },

            // Airedale Terrier
            {
                ponto: 1,
                peso: 8
            },

            // Doberman
            {
                ponto: 87,
                peso: 1
            },  

            // Bernese Mountain
            {
                ponto: 13,
                peso: 1.3
            },  
        ]
    },

    // 15 Boerboel
    {
        dados: {
            nome: "Boerboel",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Boerboel-walking-in-the-grass.jpg"
        },
        arestas: [
            // Boxer
            {
                ponto: 17,
                peso: 6.4
            },

            // Cane Corso
            {
                ponto: 21,
                peso: 2.7
            },

            // Bulldog  
            {
                ponto: 19,
                peso: 9.6
            },

            // Rottweiler   
            {
                ponto: 62,
                peso: 1.2
            },

            // Dogue de Bordeaux   
            {
                ponto: 28,
                peso: 1.5
            },
        ]
    },

    // 16 Border terrier
    {
        dados: {
            nome: "Border Terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Border-Terrier-running.jpg"
        },
        arestas: [
            // Wirefox terrier
            {
                ponto: 84,
                peso: 1.2
            },

            // Terrier Irlandês
            {
                ponto: 39,
                peso: 1.2
            },

            // Parson Russel Terrier
            {
                ponto: 52,
                peso: 12.3
            },

            // Manchester Terrier
            {
                ponto: 58,
                peso: 3.4
            },

            // Jack Russel Terrier
            {
                ponto: 41,
                peso: 5.9
            },

            // Pug
            {
                ponto: 60,
                peso: 1.1
            },
        ]
    },

    // 17 Boxer
    {
        dados: {
            nome: "Boxer",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Boxer-head-portrait-outdoors.jpg"
        },
        arestas: [
            // American Stanfordshire Terrier
            {
                ponto: 3,
                peso: 2.2
            },

            // Dogue de Bordeaux
            {
                ponto: 28,
                peso: 11
            },

            // Terrier Irlandês
            {
                ponto: 39,
                peso: 1 
            },

            // Boerboel
            {
                ponto: 15,
                peso: 6.4
            },

            // Bulldog
            {
                ponto: 18,
                peso: 7.1
            },

            // Cane Corso
            {
                ponto: 21,
                peso: 14.1
            },

            // Stanfordshire bull terrier
            {
                ponto: 70,
                peso: 1.3
            },
        ]
    },

    // 18 Britanny
    {
        dados: {
            nome: "Britanny",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Brittany-in-profile-outdoors.jpg"
        },
        arestas: [
            // Spinone italiano
            {
                ponto: 69,
                peso: 3.3
            },

            // Gordon Setter
            {
                ponto: 34,
                peso: 3.3
            },

            // Viszla
            {
                ponto: 79,
                peso: 1.1
            },

            // Setter Irlandês
            {
                ponto: 37,
                peso: 2.5
            },

            //  Griffon de aponte de pelo duro 
            {
                ponto: 85,
                peso: 1.6
            },
        ]
    },

    // 19 Bulldog
    {
        dados: {
            nome: "Bulldog",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Bulldog-standing-in-the-grass.jpg"
        },
        arestas: [
            // Cane Corso
            {
                ponto: 21,
                peso: 1.9
            },

            // Dogue de Bordeaux
            {
                ponto: 28,
                peso: 4
            },

            // Boxer
            {
                ponto: 17,
                peso: 7.1
            },

            // Boerboel
            {
                ponto: 15,
                peso: 9.6
            },

            // American Stanfordshire Terrier
            {
                ponto: 3,
                peso: 3.2
            },

            // Bull terrier
            {
                ponto: 20,
                peso: 1.7
            },

            // Kelpie
            {
                ponto: 44,
                peso: 1.3
            },

            // Stanfordshire Bull terrier
            {
                ponto: 70,
                peso: 3.3
            },
        ]
    },

    // 20 Bull Terrier
    {
        dados: {
            nome: "Bull Terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Bull-Terrier-laying-in-the-grass.jpg"
        },
        arestas: [
            // Manchester Terrier
            {
                ponto: 78,
                peso: 1
            },

            // Bulldog
            {
                ponto: 78,
                peso: 1
            },

            // American Stanfordshire Terrier
            {
                ponto: 3,
                peso: 5.7
            },

            // Stanfordshire Bull Terrier
            {
                ponto: 70,
                peso: 8.3
            },
        ]
    },

    // 21 Cane Corso
    {
        dados: {
            nome: "Cane Corso",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Cane-Corso.jpg"
        },
        arestas: [
            // Bulldog
            {
                ponto: 19,
                peso: 1.9
            },

            // São Bernard
            {
                ponto: 63,
                peso: 1.8
            },

            // Rottweiler
            {
                ponto: 62,
                peso: 2.3
            },

            // Dogue de Bordeaux
            {
                ponto: 28,
                peso: 2.8
            },

            // Boxer
            {
                ponto: 17,
                peso: 14.1
            },

            // Boerboel
            {
                ponto: 15,
                peso: 2.7
            },
        ]
    },

    // 22 Chow Chow
    {
        dados: {
            nome: "Chow Chow",
            imageURL: "https://www.akc.org/wp-content/uploads/2018/04/chow-chow-closeup-portrait-drooling.jpg"
        },
        arestas: [
            // Eurasier
            {
                ponto: 29,
                peso: 42.5
            },
        ]
    },

    // 23 Cardigan welsh corgi
    {
        dados: {
            nome: "Cardigan welsh corgi",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Cardigan-Welsh-Corgi1.jpg"
        },
        arestas: [
            // Pastor australiano
            {
                ponto: 6,
                peso: 2.2
            },

            // Kelpie
            {
                ponto: 44,
                peso: 4.3
            },

            // Pembroke welsh corgi
            {
                ponto: 54,
                peso: 16.8
            },

            // Bearded Collie
            {
                ponto: 11,
                peso: 4.2
            },

            // Collie
            {
                ponto: 26,
                peso: 8.5
            },

            // Sheltie
            {
                ponto: 65,
                peso: 5.9
            },
        ]
    },

    // 24 Chihuahua
    {
        dados: {
            nome: "Chihuahua",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Chihuahua-at-the-2016-AKC-National-Championship.jpg"
        },
        arestas: [
            // Terrier americano sem pelo
            {
                ponto: 5,
                peso: 1.2
            },

            // Cristado Chinês
            {
                ponto: 89,
                peso: 4.4
            },
        ]
    },
    
    // 25 Chinook
    {
        dados: {
            nome: "Chinook",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Chinook-closeup.jpg"
        },
        arestas: [
            // Malamute do Alasca
            {
                ponto: 0,
                peso: 8.7
            },

            // Cão da Groelândia
            {
                ponto: 32,
                peso: 16.8
            },

            // Bearded Collie
            {
                ponto: 11,
                peso: 1.2
            },

            // Xoloitzcuntli
            {
                ponto: 86,
                peso: 3.2
            },

            // Collie
            {
                ponto: 26,
                peso: 6.2
            },

            // Pastor belga de malinois
            {
                ponto: 9,
                peso: 2.4
            },

            // Leonberger
            {
                ponto: 46,
                peso: 2.2
            },

            // Sheltie
            {
                ponto: 65,
                peso: 2.4
            },

            // Pastor australinao
            {
                ponto: 6,
                peso: 2.7
            },

            // Pastor alemão
            {
                ponto: 51,
                peso: 28.7
            },

            // Pastor da Picardia
            {
                ponto: 12,
                peso: 10.3
            },

            // Husky siberiano
            {
                ponto: 68,
                peso: 2
            },
        ]
    },

    // 26 Collie
    {
        dados: {
            nome: "Collie",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Collie-standing-in-a-field.jpg"
        },
        arestas: [
            // Bearded Collie
            {
                ponto: 11,
                peso: 14.1
            },

            // Pembroke Welsh Corgi
            {
                ponto: 54,
                peso: 9.4
            },

            // Retriever da Nova Escócia
            {
                ponto: 50,
                peso: 5.7
            },

            // Chinook
            {
                ponto: 25,
                peso: 6.1
            },

            // Sheltie
            {
                ponto: 65,
                peso: 60.7
            },

            // Xoloitzcuntli
            {
                ponto: 86   ,
                peso: 1.1
            },

            // Pastor Australiano
            {
                ponto: 6,
                peso: 13.8
            },

            // Cardigan Welsh corgi
            {
                ponto: 23,
                peso: 8.5
            },

            // Kelpie
            {
                ponto: 44,
                peso: 3
            },
        ]
    },
    
    // 27 Retriever do pelo encaracolado
    {
        dados: {
            nome: "Retriever do pelo encaracolado",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Curly-Coated-Retriever-laying-down-in-a-field.jpg"
        },
        arestas: [
            // Golden Retriever
            {
                ponto: 32,
                peso: 2.5
            },

            // Labrador
            {
                ponto: 45,
                peso: 1.2
            },

            // Setter Irlandês
            {
                ponto: 39,
                peso: 1.1
            },
        ]
    },

    // 28 Dogue de Bordeaux
    {
        dados: {
            nome: "Dogue de Bordeaux",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Dogue-de-Bordeaux-on-white-05.jpg"
        },
        arestas: [
            // São Bernard
            {
                ponto: 63,
                peso: 3
            },

            // Boxer
            {
                ponto: 17,
                peso: 11
            },

            // Boerboel
            {
                ponto: 15,
                peso: 1.5
            },

            // Bulldog
            {
                ponto: 19,
                peso: 4
            },

            // American Stanfordshire terrier
            {
                ponto: 3,
                peso: 1.3
            },

            // Cane Corso
            {
                ponto: 21,
                peso: 2.8
            },

            // Stanfordshire bull terrier
            {
                ponto: 70,
                peso: 1.9
            },
        ]
    },

    // 29 Eurasier
    {
        dados: {
            nome: "Eurasier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Eurasier.1.jpg"
        },
        arestas: [
            // Chow Chow
            {
                ponto: 22,
                peso: 42.5
            },

            // Keenshond
            {
                ponto: 43,
                peso: 7.6
            },
        ]
    },

    // 30 Fox Hound
    {
        dados: {
            nome: "Fox hound",
            imageURL: "https://www.akc.org/wp-content/uploads/2018/06/american-foxhound-pair-looking-up.jpg"
        },
        arestas: [
            // Basset hound
            {
                ponto: 7,
                peso: 3.1
            },

            // Beagle
            {
                ponto: 8,
                peso: 13.6
            },

            // Redbone coonhound
            {
                ponto: 61,
                peso: 9.5
            },
        ]
    },

    // 31 Golden Retriever
    {
        dados: {
            nome: "Golden Retriever",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Slide-11.jpg"
        },
        arestas: [
            // labrador
            {
                ponto: 45,
                peso: 7.2
            },

            // Setter Irlandês
            {
                ponto: 37,
                peso: 2.4
            },

            // Retriever do pelo encaracolado
            {
                ponto: 27,
                peso: 2.5
            },

            // Airedale Terrier
            {
                ponto: 1,
                peso: 1.3
            },
        ]
    },

    // 32 Cão da Groelândia
    {
        dados: {
            nome: "Cão da Groelândia",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Greenland_dog_upernavik_2007-06-02_sample.jpg/220px-Greenland_dog_upernavik_2007-06-02_sample.jpg"
        },
        arestas: [
            // Malamute do Alasca
            {
                ponto: 0,
                peso: 68.2
            },

            // Husky Siberiano
            {
                ponto: 68,
                peso: 27.2
            },

            // Chinook
            {
                ponto: 25,
                peso: 16.8
            },
        ]
    },

    // 33 Schanauzer Gigante
    {
        dados: {
            nome: "Schanauzer Gigante",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Giant-Schanuzer-standing-in-a-field.jpg"
        },
        arestas: [
            // Airedale Terrier
            {
                ponto: 1,
                peso: 4.7
            },

            // Doberman
            {
                ponto: 87,
                peso: 4.8
            },

            // Terrier preto da Rússia
            {
                ponto: 14,
                peso: 20.3
            },

            // Schnauzer
            {
                ponto: 73,
                peso: 4.6
            },
        ]
    },

    // 34 Gordon Setter
    {
        dados: {
            nome: "Gordon Setter",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Gordon-Setter.3.jpg"
        },
        arestas: [
            // Setter Irlandês
            {
                ponto: 37,
                peso: 7.6
            },

            // Britanny
            {
                ponto: 18,
                peso: 3.3
            },

            // Vizsla
            {
                ponto: 79,
                peso: 2.7
            },

            // Griffon de aponte de pelo duro
            {
                ponto: 85,
                peso: 1.7
            },

            // Spinone Italiano 
            {
                ponto: 69,
                peso: 1.9
            },
        ]
    },

    // 35 Greyhound
    {
        dados: {
            nome: "Greyhound",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Greyhound-running.jpg"
        },
        arestas: [
            // Italian greyhound
            {
                ponto: 28,
                peso: 2.7
            },

            // Whippet
            {
                ponto: 83,
                peso: 13.8
            },
        ]
    },

    // 36 Havanese
    {
        dados: {
            nome: "Havanese",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Havanese-standing-outdoors.jpg"
        },
        arestas: [
            // Maltese
            {
                ponto: 48,
                peso: 29.6
            },

            // Poodle
            {
                ponto: 57,
                peso: 2.9
            },
        ]
    },

    // 37 Irish Setter
    {
        dados: {
            nome: "Setter irlandês",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Irish-Setter-on-point-in-a-field.jpg"
        },
        arestas: [
            // Britanny
            {
                ponto: 18,
                peso: 2.5
            },

            // Gordon setter
            {
                ponto: 34,
                peso: 7.6
            },

            // Spinone Italiano
            {
                ponto: 69,
                peso: 1.1
            },

            // Retriever do pelo encaracolado
            {
                ponto: 27,
                peso: 1.1
            },

            // Vizsla
            {
                ponto: 79,
                peso: 1.7
            },

            // Golden retriever
            {
                ponto: 31,
                peso: 2.4
            },
        ]
    },

    // 38 Greyhound italiano
    {
        dados: {
            nome: "Greyhound Italiano",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Italian-Greyhound-running-in-a-competition.jpg"
        },
        arestas: [
            // Greyhound
            {
                ponto: 35,
                peso: 2.7
            },

            // Manchester Terrier
            {
                ponto: 78,
                peso: 1.2
            },

            // Whippet
            {
                ponto: 83,
                peso: 5.3
            },
        ]
    },

    // 39 Terrier Irlandês
    {
        dados: {
            nome: "Terrier Irlandês",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Irish-Terrier-head-portrait-standing-outdoors.jpg"
        },
        arestas: [
            // Jack Russel Terrier
            {
                ponto: 41,
                peso: 1.3
            },

            // Yorkshire
            {
                ponto: 88,
                peso: 1.7
            },

            // Border terrier
            {
                ponto: 16,
                peso: 1.2
            },

            // Airedale terrier
            {
                ponto: 1,
                peso: 3.7
            },

            // Manchester Terrier
            {
                ponto: 78,
                peso: 1.9
            },

            // Boxer
            {
                ponto: 17,
                peso: 1
            },
        ]
    },

    // 40 Cão islandês
    {
        dados: {
            nome: "Cão islandês",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Icelandic-Sitting.jpg"
        },
        arestas: [
            // Keeshond
            {
                ponto: 43,
                peso: 1.6
            },

            // Manchester Terrier
            {
                ponto: 78,
                peso: 1.6
            },

            // Vallhund Sueco
            {
                ponto: 75,
                peso: 2
            },
        ]
    },

    // 41 Jack Hussel Terrier
    {
        dados: {
            nome: "Jack Hussel Terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Russell-Terrier-running-across-the-grass-in-the-Fall.jpg"
        },
        arestas: [
            // Wirefox Terrier
            {
                ponto: 84,
                peso: 19.4
            },

            // Border Terrier
            {
                ponto: 16,
                peso: 5.9
            },

            // Parson Russel Terrier
            {
                ponto: 52,
                peso: 12.2
            },

            // Terrier americano sem pelo
            {
                ponto: 5,
                peso: 1.5
            },

            // Toy fox terrier
            {
                ponto: 77,
                peso: 1.8
            },

            // Setter Irlandês
            {
                ponto: 37,
                peso: 1.3
            },

            // Manchester Terrier
            {
                ponto: 78,
                peso: 1.8
            },
        ]
    },

    // 42 Chin japonês
    {
        dados: {
            nome: "Chin japonÊs",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Japanese-Chin-standing-outdoors.jpg"
        },
        arestas: [
            // Akita
            {
                ponto: 2,
                peso: 2
            },

            // Shih Tzu
            {
                ponto: 67,
                peso: 3.1
            },

            // Pekingese
            {
                ponto: 55,
                peso: 5.7
            },

            // Shiba Inu
            {
                ponto: 66,
                peso: 2.8
            },

            // Lhasa Apso
            {
                ponto: 47,
                peso: 3.8
            },
        ]
    },

    // 43 Keenshond
    {
        dados: {
            nome: "Keenshond",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Keeshond-exploring-in-the-backyard.jpg"
        },
        arestas: [
            // Cão islandês de pastoreio
            {
                ponto: 40,
                peso: 1.6
            },

            // Lulu da pomerânia
            {
                ponto: 58,
                peso: 2.3
            },

            // Eurasier
            {
                ponto: 58,
                peso: 7.6
            },

            // Schanauzer
            {
                ponto: 73,
                peso: 1.2
            },

            // Schipperke
            {
                ponto: 74,
                peso: 1.2
            },

            // Vallhund sueco
            {
                ponto: 75,
                peso: 2.5
            },
        ]
    },

    // 44 Kelpie
    {
        dados: {
            nome: "Kelpie",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Australian-Kelpie.jpg"
        },
        arestas: [
            // Pastor australiano
            {
                ponto: 6,
                peso: 2.4
            },

            // Pembroki welsh corgi
            {
                ponto: 44,
                peso: 3.1
            },

            // Bulldog
            {
                ponto: 19,
                peso: 1.3
            },

            // Airedale Terrier
            {
                ponto: 1,
                peso: 1.3
            },

            // Bearded Collie
            {
                ponto: 11,
                peso: 8.9
            },

            // Sheltie
            {
                ponto: 65,
                peso: 3.6
            },

            // Cardigan Welsh Corgi
            {
                ponto: 23,
                peso: 4.3
            },

            // Collie
            {
                ponto: 26,
                peso: 3
            },
        ]
    },

    // 45 Labrador
    {
        dados: {
            nome: "Labrador",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Labrador-Retriever-swimming-with-a-decoy.jpg"
        },
        arestas: [
            // Golden Retriever
            {
                ponto: 6,
                peso: 7.2
            },

            // Retriever de pelo encaracolado
            {
                ponto: 27,
                peso: 1.2
            },

            // Retriever da Nova Escócia
            {
                ponto: 50,
                peso: 1.8
            },
        ]
    },

    // 46 Leonberger
    {
        dados: {
            nome: "Leonberger",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Leonberger-standing-in-a-field.jpg"
        },
        arestas: [
            // São bernard
            {
                ponto: 63,
                peso: 9.6
            },

            // Terrier preto da Rússia
            {
                ponto: 14,
                peso: 2.5
            },

            // Pastor Alemão
            {
                ponto: 51,
                peso: 5.1
            },

            // Pastor da Picardia
            {
                ponto: 12,
                peso: 3.5
            },

            // Chinook
            {
                ponto: 25,
                peso: 2.2
            },

            // Rottweiler
            {
                ponto: 62,
                peso: 5.2
            },

            // Bernese Mountain
            {
                ponto: 13,
                peso: 2.7
            },
        ]
    },

    // 47 Lhasa Apso
    {
        dados: {
            nome: "Lhasa Apso",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Lhasa-Apso-standing-in-the-garden.jpg"
        },
        arestas: [
            // Chin Japonês
            {
                ponto: 42,
                peso: 3.8
            },

            // Spaniel Tibetano
            {
                ponto: 76,
                peso: 12.2
            },

            // Pug
            {
                ponto: 60,
                peso: 1
            },

            // Shih Tzu
            {
                ponto: 67,
                peso: 33.6
            },

            // Pekingese
            {
                ponto: 55,
                peso: 25.8
            },
        ]
    },

    // 48 Maltese
    {
        dados: {
            nome: "Maltese",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Maltese-sitting-in-the-grass.jpg"
        },
        arestas: [
            // Havanese
            {
                ponto: 36,
                peso: 29.6
            },

            // Poodle
            {
                ponto: 57,
                peso: 1.2
            },
        ]
    },

    // 49 Norfolk Terrier
    {
        dados: {
            nome: "Norfolk Terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Norfolk-Terrier-sitting-in-the-grass.1.jpg"
        },
        arestas: [
            // Terrier Irlandês
            {
                ponto: 39,
                peso: 2.9
            },

            // Wirefox Terrier
            {
                ponto: 84,
                peso: 1.5
            },

            // Yorkshire
            {
                ponto: 88,
                peso: 6
            },

            // West Highland terrier
            {
                ponto: 82,
                peso: 5.9
            },
        ]
    },

    // 50 Retriever da Nova Escócia
    {
        dados: {
            nome: "Retriever da Nova Escócia",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Nova-Scotia-Duck-Tolling-Retriever-slide.jpg"
        },
        arestas: [
            // Bearded collie
            {
                ponto: 11,
                peso: 2.9
            },

            // Labrador
            {
                ponto: 11,
                peso: 1.6
            },

            // Sheltie
            {
                ponto: 65,
                peso: 3.8
            },

            // Collie
            {
                ponto: 26,
                peso: 5.7
            },

            // American Cocker Spaniel
            {
                ponto: 4,
                peso: 3.5
            },

            // Pug
            {
                ponto: 60,
                peso: 2.2
            },

            // Airedale Terrier
            {
                ponto: 1,
                peso: 1.8
            },
        ]
    },

    // 51 Pastor Alemão
    {
        dados: {
            nome: "Pastor Alemão",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/German-Shepherd-Dog-running.jpg"
        },
        arestas: [
            // Pastor da Picardia
            {
                ponto: 12,
                peso: 29.1
            },

            // Chinook
            {
                ponto: 12,
                peso: 28.7
            },

            // Pastor Australiano
            {
                ponto: 6,
                peso: 2.2
            },
            
            // Doberman
            {
                ponto: 87,
                peso: 2.2
            },

            // Pastor belga de Malinois
            {
                ponto: 9,
                peso: 9.1
            },

            // Leonberger
            {
                ponto: 46,
                peso: 5.1
            },

            // Xoloitzcuintli 
            {
                ponto: 86,
                peso: 14.4  
            },

            // Cão de agua português 
            {
                ponto: 59,
                peso: 5.7 
            },
        ]
    },

    // 52 Parson Russel Terrier
    {
        dados: {
            nome: "Parson Russel Terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Parson-Russell-Terrier-laying-down-indoors.jpg"
        },
        arestas: [
            // Border Terrier
            {
                ponto: 16,
                peso: 12.3
            },

            // Terrier americano sem pelo
            {
                ponto: 5,
                peso: 1.2
            },  

            // Manchester Terrier
            {
                ponto: 78,
                peso: 2.5
            },  

            // Jack Russel Terrier
            {
                ponto: 41,
                peso: 12.2
            },

            // Wirefox terrier
            {
                ponto: 84,
                peso: 16.9
            },

            // Toy fox terrier
            {
                ponto: 77,
                peso: 1.5
            },

            // Stanfordshire bull terrier
            {
                ponto: 70,
                peso: 1.5
            },
        ]
    },

    // 53 Papillon
    {
        dados: {
            nome: "Papillon",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Papillon-laying-in-the-grass-outdoors.20200513145032873.jpg"
        },
        arestas: [
            // Pug
            {
                ponto: 60,
                peso: 1.8
            },
        ]
    },

    // 54 Pembroki Welsh corgi
    {
        dados: {
            nome: "Pembroki Welsh corgi",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"
        },
        arestas: [
            // Kelpie
            {
                ponto: 44,
                peso: 3.1
            },

            // Sheltie
            {
                ponto: 65,
                peso: 6.3
            },  

            // Pastor Australiano
            {
                ponto: 6,
                peso: 1.8
            },

            // Cardigan Welsh Corgi
            {
                ponto: 23,
                peso: 16.8
            },

            // Bearded collie
            {
                ponto: 11,
                peso: 4.3
            },

            // Collie
            {
                ponto: 25,
                peso: 9.6
            },

            // Wirefox Terrier
            {
                ponto: 84,
                peso: 1.8
            },
        ]
    },

    // 55 Pekingese
    {
        dados: {
            nome: "Pekingese",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Pekingese-standing-in-the-grass.jpg"
        },
        arestas: [
            // Lhasa Apso
            {
                ponto: 47,
                peso: 25.8
            },

            // Pug
            {
                ponto: 60,
                peso: 1.8
            },

            // Cristado Chinês
            {
                ponto: 89,
                peso: 2.6   
            },

            // Shih Tzu
            {
                ponto: 67,
                peso: 36.8   
            },

            // Chin japonês
            {
                ponto: 42,
                peso: 5.7  
            },

            // Spaniel Tibetano
            {
                ponto: 76,
                peso: 30.2
            },
        ]
    },

    // 56 Pharaoh hound
    {
        dados: {
            nome: "Pharaoh hound",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Pharaoh-Hound-laying-down-in-profile.jpg"
        },
        arestas: [
            // Whippet
            {
                ponto: 83,
                peso: 1.8
            },
        ]
    },

    // 57 Poodle
    {
        dados: {
            nome: "Poodle",
            imageURL: "https://www.akc.org/wp-content/uploads/2018/05/Groomed-Toy-Poodle-standing-outdoors.jpg"
        },
        arestas: [
            // Maltese
            {
                ponto: 48,
                peso: 1.2
            },

            // Havanese
            {
                ponto: 36,
                peso: 2.9
            },

            // Poodle normal    
            {
                ponto: 71,
                peso: 5.1
            },

            // Poodle miniatura    
            {
                ponto: 72,
                peso: 35.1
            },
        ]
    },

    // 58 Lulu da pomerânia
    {
        dados: {
            nome: "Lulu da Pomerânia",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Pomeranian-On-White-01.jpg"
        },
        arestas: [
            // Volpino
            {
                ponto: 80,
                peso: 5.7
            },

            // Keeshond
            {
                ponto: 43,
                peso: 2.3
            },

            // Schnauzer
            {
                ponto: 73,
                peso: 1.8
            },

            // Pug
            {
                ponto: 60,
                peso: 1.1
            },

            // Schippperke
            {
                ponto: 74,
                peso: 1.1
            },
        ]
    },

    // 59 Cão de água português
    {
        dados: {
            nome: "Cão de água português",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Portuguese-Water-Dog-On-White-03.jpg"
        },
        arestas: [
            // Pastor da Picardia
            {
                ponto: 12,
                peso: 3
            },

            // Pastor alemão
            {
                ponto: 51,
                peso: 5.7
            },

            // Poodle normal
            {
                ponto: 71,
                peso: 1.8
            },

            // Poodle miniatura
            {
                ponto: 72,
                peso: 1.5
            },
        ]
    },

    // 60 Pug
    {
        dados: {
            nome: "Pug",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Black-Pug-sitting-in-a-field-of-dandelions.jpg"
        },
        arestas: [
            // Border terrier
            {
                ponto: 16,
                peso: 1.1
            },

            // Retriever da Nova Escócia
            {
                ponto: 50,
                peso: 2.2
            },

            // Lulu da pomerânia
            {
                ponto: 58,
                peso: 1.1
            },

            // Shih Tzu
            {
                ponto: 67,
                peso: 1.6
            },

            // Cristado chinês
            {
                ponto: 89,
                peso: 1.6
            },

            // Pappillon
            {
                ponto: 53,
                peso: 1.8
            },

            // Lhasa Apso
            {
                ponto: 47,
                peso: 1
            },

            // Schanauzer
            {
                ponto: 73,
                peso: 1.2
            },

            // Pekingese
            {
                ponto: 55,
                peso: 1.8
            },

            // Schipperke
            {
                ponto: 74,
                peso: 2.6
            },
        ]
    },

    // 61 Redbone coonhound
    {
        dados: {
            nome: "Redbone coonhound",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Redbone-Coonhound-wading-through-water.jpg"
        },
        arestas: [
            // Basset hound
            {
                ponto: 7,
                peso: 3.2
            },

            // Fox hound
            {
                ponto: 29,
                peso: 9.5
            },

            // Beagle
            {
                ponto: 8,
                peso: 12.5
            },

            // Manchester Terrier
            {
                ponto: 78,
                peso: 1.3
            },
        ]
    },

    // 62 Rottweiler
    {
        dados: {
            nome: "Rottweiler",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Rottweiler-lying-on-a-park-bench.jpg"
        },
        arestas: [
            // São Bernard
            {
                ponto: 63,
                peso: 1.8
            },

            // Cane Corso
            {
                ponto: 21,
                peso: 2.3
            },

            // Leonberger
            {
                ponto: 46,
                peso: 5.2
            },

            // Terrier preto da Rússia
            {
                ponto: 46,
                peso: 43
            },

            // Boerboel
            {
                ponto: 15,
                peso: 1.2
            },
        ]
    },

    // 63 São Bernard
    {
        dados: {
            nome: "São Bernard",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Saint-Bernard-standing-in-profile-outdoors.jpg"
        },
        arestas: [
            // Bernese mountain
            {
                ponto: 13,
                peso: 7.1
            },

            // Cane Corso
            {
                ponto: 21,
                peso: 1.8
            },

            // Leonberger
            {
                ponto: 46,
                peso: 9.6
            },

            // Rottweiler
            {
                ponto: 62,
                peso: 1.8
            },

            // Dogue de Bordeaux
            {
                ponto: 28,
                peso: 3
            },
        ]
    },

    // 64 Salsicha
    {
        dados: {
            nome: "Salsicha",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Dachshund-standing-outdoors.jpg"
        },
        arestas: [
        ]
    },

    // 65 Sheltie
    {
        dados: {
            nome: "Sheltie",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Shetland-Sheepdog-face.jpg"
        },
        arestas: [
            // Collie
            {
                ponto: 26,
                peso: 60.7
            }, 
            
            // Pastor australiano
            {
                ponto: 6,
                peso: 6.9
            },  

            // Cardigan Welsh Corgi
            {
                ponto: 23,
                peso: 65.9
            },

            // Kelpie
            {
                ponto: 44,
                peso: 3.6
            },

            // Bearded Collie
            {
                ponto: 11,
                peso: 6.1
            },

            // Pembroki Welsh corgi
            {
                ponto: 54,
                peso: 6.3
            },

            // Chinook
            {
                ponto: 25,
                peso: 2.4
            },

            // Retriever da Nova Escócia
            {
                ponto: 50,
                peso: 5.8
            },

            // Airedale Terrier
            {
                ponto: 1,
                peso: 1.3
            },
        ]
    },

    // 66 Shiba Inu
    {
        dados: {
            nome: "Shiba Inu",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Shiba-Inu-running-in-the-snow-in-the-winter.jpg"
        },
        arestas: [
            // Akita
            {
                ponto: 2,
                peso: 1.8
            }, 

            // Chin japonês
            {
                ponto: 42,
                peso: 2.8
            }, 
        ]
    },

    // 67 Shih Tzu
    {
        dados: {
            nome: "Shih Tzu",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Shih-Tzu-in-the-grass.jpg"
        },
        arestas: [
            // Pekingese
            {
                ponto: 55,
                peso: 36.8,
            },

            // Spinel Tibetano
            {
                ponto: 55,
                peso: 18.4,
            },

            // Pug
            {
                ponto: 60,
                peso: 1.6,
            },

            // Lhasa Apso
            {
                ponto: 47,
                peso: 33.6,
            },

            // Chin japonês
            {
                ponto: 42,
                peso: 3.1,
            },
        ]
    },
    
    // 68 Husky siberiano
    {
        dados: {
            nome: "Husky siberiano",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Siberian-Husky-standing-outdoors-in-the-winter.jpg"
        },
        arestas: [
            // Malamute do Alasca
            {
                ponto: 0,
                peso: 23,
            },

            // Chinook
            {
                ponto: 25,
                peso: 2,
            },

            // Cão da Groelândia
            {
                ponto: 40,
                peso: 27.2,
            },
        ]
    },

    // 69 Spinone italiano
    {
        dados: {
            nome: "Spinone italiano",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Spinone-Italiano-exploring-in-a-forest.jpg"
        },
        arestas: [
            // Griffon de aponte de pelo duro
            {
                ponto: 85,
                peso: 3,
            },

            // Gordon Setter
            {
                ponto: 34,
                peso: 1.9,
            },

            // Britanny
            {
                ponto: 18,
                peso: 3.3,
            },

            // Setter irlandês
            {
                ponto: 37,
                peso: 1.1,
            },
        ]
    },

    // 70 Stanfordshire bull terrier
    {
        dados: {
            nome: "Stanfordshire bull terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Staffordshire-Bull-Terrier-standing-outdoors.jpg"
        },
        arestas: [
            // American Stanfordshire terrier
            {
                ponto: 3,
                peso: 4.9,
            },

            // Dogue de Bordeaux
            {
                ponto: 28,
                peso: 1.4,
            },

            // Bull terrier
            {
                ponto: 20,
                peso: 8.3,
            },

            // Parson Russel terrier
            {
                ponto: 52,
                peso: 1.5,
            },

            // Bulldog
            {
                ponto: 19,
                peso: 3.3,
            },

            // Boxer
            {
                ponto: 17,
                peso: 3.3,
            },
        ]
    },

    // 71 Poodle normal
    {
        dados: {
            nome: "Poodle normal",
            imageURL: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/24134701/Standard-Poodle-standing-outdoors-at-the-beach.jpg"
        },
        arestas: [
            // Cão de água de português
            {
                ponto: 59,
                peso: 1.8,
            },

            // Poodle
            {
                ponto: 57,
                peso: 5.1,
            },

            // Poodle miniatura
            {
                ponto: 71,
                peso: 7.7,
            },
        ]
    },

    // 72 Poodle miniatura
    {
        dados: {
            nome: "Poodle miniatura",
            imageURL: "https://www.akc.org/wp-content/uploads/2019/05/Mini-Poodle.jpg"
        },
        arestas: [
            // Cão de água de português
            {
                ponto: 59,
                peso: 1.5,
            },

            // Poodle
            {
                ponto: 57,
                peso: 35.1,
            },

            // Poodle normal
            {
                ponto: 71,
                peso: 7.7,
            },

            // Havanese
            {
                ponto: 36,
                peso: 2.5,
            },
        ]
    },

    // 73 Schnauzer
    {
        dados: {
            nome: "Schnauzer",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Standard-Schnauzer-laying-outdoors.jpg"
        },
        arestas: [
            // Lulu da pomerânia
            {
                ponto: 58,
                peso: 1.8,
            },

            // Keeshond
            {
                ponto: 43,
                peso: 1.2,
            },

            // Schnauzer Gigante
            {
                ponto: 32,
                peso: 4.6,
            },

            // Pug
            {
                ponto: 60,
                peso: 1.2,
            },
        ]
    },

    // 74 Schipperke
    {
        dados: {
            nome: "Schipperke",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Schipperke-standing-in-a-field.jpg"
        },
        arestas: [
            // Lulu da pomerânia
            {
                ponto: 58,
                peso: 1.1,
            },

            // Keeshond
            {
                ponto: 43,
                peso: 1.2,
            },

            // Pug
            {
                ponto: 60,
                peso: 2.6,
            },
        ]
    },

    // 75 Vallhund sueco
    {
        dados: {
            nome: "Vallhund sueco",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Swedish-Vallhund-standing-in-a-grassy-field.jpg"
        },
        arestas: [
            // Keeshond
            {
                ponto: 43,
                peso: 2.5,
            },

            // Cão islandês de pastoreio
            {
                ponto: 32,
                peso: 2,
            },
        ]
    },

    // 76 Spaniel Tibetano
    {
        dados: {
            nome: "Spaniel Tibetano",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Tibetan-Spaniel-laying-down-outdoors.jpg"
        },
        arestas: [
            // Pekingese
            {
                ponto: 55,
                peso: 30.2,
            },

            // Chin japonês
            {
                ponto: 42,
                peso: 2.3,
            },

            // Shih Tzu
            {
                ponto: 67,
                peso: 18.4,
            },

            // Lhasa Apso
            {
                ponto: 47,
                peso: 12.2,
            },
        ]
    },
    
    // 77 Toy fox Terrier
    {
        dados: {
            nome: "Toy fox Terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Toy-Fox-Terrier-running-outdoors.jpg"
        },
        arestas: [
            // Parson Russel Terrier
            {
                ponto: 52,
                peso: 1.5,
            },

            // Terrier americano sem pelo
            {
                ponto: 5,
                peso: 2.2,
            },

            // Manchester Terrier
            {
                ponto: 78,
                peso: 1.6,
            },

            // Jack Russel Terrier
            {
                ponto: 41,
                peso: 1.8,
            },

            // Wirefox Terrier
            {
                ponto: 84,
                peso: 5,
            },
        ]
    },

    // 78 Manchester terrier
    {
        dados: {
            nome: "Manchester terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2018/04/ANC2016-MeetTheBreeds-1310134.jpg"
        },
        arestas: [
            // Airedale Terrier
            {
                ponto: 1,
                peso: 1.5,
            },

            // Terrier irlandês
            {
                ponto: 39,
                peso: 1.9,
            },

            // Redbone coonhound
            {
                ponto: 61,
                peso: 1.3,
            },

            // Bull terrier
            {
                ponto: 20,
                peso: 1,
            },

            // Whippet
            {
                ponto: 83,
                peso: 1.1,
            },

            // Doberman
            {
                ponto: 87,
                peso: 4.5,
            },

            // Greyhound italiano
            {
                ponto: 38,
                peso: 1.2,
            },

            // Parson Russel Terrier
            {
                ponto: 52,
                peso: 2.5,
            },

            // Toy fox terrier
            {
                ponto: 77,
                peso: 1.6,
            },

            // Terrier americano sem pelo
            {
                ponto: 5,
                peso: 2.1,
            },

            // Jack Russel Terrier
            {
                ponto: 41,
                peso: 1.8,
            },

            // Wirefox Terrier
            {
                ponto: 84,
                peso: 3.2,
            },

            // Cão islandês de pastoreio
            {
                ponto: 40,
                peso: 1.6,
            },

            // Border Terrier
            {
                ponto: 16,
                peso: 3.4,
            },

            // Cristado chinês  
            {
                ponto: 89,
                peso: 1.1,
            },
        ]
    },

    // 79 Vizsla
    {
        dados: {
            nome: "Vizsla",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Vizsla-sniffing-in-a-harvested-field.jpg"
        },
        arestas: [
            // Setter irlandês
            {
                ponto: 37,
                peso: 1.7,
            },

            // Griffon de aponte de pelo duro
            {
                ponto: 85,
                peso: 2,
            },

            // Britanny
            {
                ponto: 18,
                peso: 1.1,
            },

            // Gordon setter
            {
                ponto: 34,
                peso: 2.7,
            },
        ]
    },

    // 80 Volpino
    {
        dados: {
            nome: "Volpino",
            imageURL: "https://www.akc.org/wp-content/uploads/2021/03/Volpino-Italiano-laying-down-in-the-grass.jpg"
        },
        arestas: [
            // Lulu da pomerânia
            {
                ponto: 58,
                peso: 5.7,
            },
        ]
    },

    // 81 Weimaraner
    {
        dados: {
            nome: "Weimaraner",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Weimaraner-head-close-up.jpg"
        },
        arestas: [
            // Griffon de aponte de pelo duro
            {
                ponto: 85,
                peso: 1.5,
            },
        ]
    },

    // 82 West highland terrier
    {
        dados: {
            nome: "West highland terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/West-Highland-White-Terrier-on-White-01.jpg"
        },
        arestas: [
            // Norfolk terrier
            {
                ponto: 49,
                peso: 5.9,
            },

            // Airedale terrier
            {
                ponto: 1,
                peso: 1.7,
            },
        ]
    },

    // 83 Whippet
    {
        dados: {
            nome: "Whippet",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Whippet-running-on-the-beach.jpg"
        },
        arestas: [
            // Greyhond italiano
            {
                ponto: 38,
                peso: 5.3,
            },

            // Greyhond
            {
                ponto: 35,
                peso: 13.8,
            },

            // Manchester terrier
            {
                ponto: 78,
                peso: 1.1,
            },

            // Pharaoh Hound
            {
                ponto: 56,
                peso: 1.8,
            },
        ]
    },

    // 84 Wirefox terrier
    {
        dados: {
            nome: "Wirefox terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Wire-Fox-Terrier.1.jpg"
        },
        arestas: [
            // Toy fox terrier
            {
                ponto: 77,
                peso: 5,
            },

            // Terrier americano sem pelo
            {
                ponto: 5,
                peso: 3.7,
            },

            // Jack Hussel Terrier
            {
                ponto: 41,
                peso: 19.4,
            },

            // Parson Hussel Terrier
            {
                ponto: 52,
                peso: 16.9,
            },

            // Border Terrier
            {
                ponto: 16,
                peso: 1.2,
            },

            // Norfolk Terrier
            {
                ponto: 49,
                peso: 1.5,
            },

            // Manchester Terrier
            {
                ponto: 78,
                peso: 3.2,
            },

            // Pembroki Welsh Corgi
            {
                ponto: 54,
                peso: 1.8,
            },
        ]
    },

    // 85 Griffon de aponte de pelo duro
    {
        dados: {
            nome: "Griffon de aponte de pelo duro",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Wirehaired-Pointing-Griffon-laying-in-a-field.jpg"
        },
        arestas: [
            // Britanny
            {
                ponto: 18,
                peso: 1.6,
            },

            // Weimaraner
            {
                ponto: 81,
                peso: 1.5,
            },

            // Spinone italiano
            {
                ponto: 69,
                peso: 3,
            },

            // Gordon Setter
            {
                ponto: 34,
                peso: 1.7,
            },

            // Vizsla
            {
                ponto: 79,
                peso: 2,
            },
        ]
    },

    // 86 Xoloitzcuintli
    {
        dados: {
            nome: "Xoloitzcuintli",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Xoloitzcuintli-on-White-06.jpg"
        },
        arestas: [
            // Doberman
            {
                ponto: 87,
                peso: 3.2,
            },

            // Chinook
            {
                ponto: 25,
                peso: 3.2,
            },

            // Pastor alemão
            {
                ponto: 51,
                peso: 14.4,
            },

            // Pastor da Picardia
            {
                ponto: 12,
                peso: 3.7,
            },

            // Collie
            {
                ponto: 26,
                peso: 1.1,
            },

            // Pastor belga de Malinois
            {
                ponto: 9,
                peso: 1,
            },
        ]
    },

    // 87 Doberman
    {
        dados: {
            nome: "Doberman",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Doberman-Pinscher-enjoying-the-sunshine-outdoors.jpg"
        },
        arestas: [
            // Manchester terrier
            {
                ponto: 78,
                peso: 4.5,
            },

            // Xoloitzcuintli
            {
                ponto: 86,
                peso: 3.2,
            },

            // Pastor alemão
            {
                ponto: 51,
                peso: 2.2,
            },

            // Pastor da Picardia
            {
                ponto: 12,
                peso: 1.3,
            },

            // Terrier preto da Rússia
            {
                ponto: 14,
                peso: 1.3,
            },

            // Schnauzer gigante
            {
                ponto: 33,
                peso: 3.8,
            },
        ]
    },

    // 88 Yorkshire
    {
        dados: {
            nome: "Yorkshire",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Yorkshire-Terrier-On-White-06.jpg"
        },
        arestas: [
            // Terrier irlandês
            {
                ponto: 39,
                peso: 1.7,
            },

            // Airedale terrier
            {
                ponto: 1,
                peso: 3.6,
            },

            // Norfolk terrier
            {
                ponto: 49,
                peso: 6,
            },
        ]
    },

    // 89 Cristado chinês
    {
        dados: {
            nome: "Cristado chinês",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Chinese-Crested-On-White-03.jpg"
        },
        arestas: [
            // Pekingese
            {
                ponto: 55,
                peso: 2.6,
            },

            // Pug
            {
                ponto: 60,
                peso: 1.6,
            },

            // Manchester terrier
            {
                ponto: 78,
                peso: 1.1,
            },

            // Chihuahua
            {
                ponto: 24,
                peso: 4.4,
            },
        ]
    },
]