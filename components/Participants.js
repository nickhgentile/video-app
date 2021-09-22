import Image from '../components/Image';

export default function Participants() {
  let participants = [
    {
      id: 1,
      firstName: 'Amity',
      lastName: 'Westley',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 2,
      firstName: 'Zebulon',
      lastName: 'Peyto',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video3.mp4'
    },
    {
      id: 3,
      firstName: 'Valaree',
      lastName: 'Iwanczyk',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video4.mp4'
    },
    {
      id: 4,
      firstName: 'Gladi',
      lastName: 'Gerardot',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 5,
      firstName: 'Fidelity',
      lastName: 'Station',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video3.mp4'
    },
    {
      id: 6,
      firstName: 'Priscilla',
      lastName: 'Stables',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video4.mp4'
    },
    {
      id: 7,
      firstName: 'Magdalena',
      lastName: 'Sonschein',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 8,
      firstName: 'Griz',
      lastName: 'Itzhaiek',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video3.mp4'
    },
    {
      id: 9,
      firstName: 'Albert',
      lastName: 'Thackray',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video4.mp4'
    },
    {
      id: 10,
      firstName: 'Whit',
      lastName: 'Fielden',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 11,
      firstName: 'Bobine',
      lastName: 'Callum',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video3.mp4'
    },
    {
      id: 12,
      firstName: 'Jorrie',
      lastName: 'Lorenzetto',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video4.mp4'
    },
    {
      id: 13,
      firstName: 'Orton',
      lastName: 'Olliffe',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 14,
      firstName: 'Tadio',
      lastName: 'MacCostye',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 15,
      firstName: 'Bridgette',
      lastName: 'Rawlinson',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 16,
      firstName: 'Hilly',
      lastName: 'Jealous',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 17,
      firstName: 'Jonah',
      lastName: 'Hookes',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 18,
      firstName: 'Lebbie',
      lastName: 'Churcher',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 19,
      firstName: 'Kirsten',
      lastName: 'Pothergill',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 20,
      firstName: 'Kelly',
      lastName: 'Sprosson',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 21,
      firstName: 'Dickie',
      lastName: 'Halse',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 22,
      firstName: 'Colet',
      lastName: 'Alcido',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 23,
      firstName: 'Terrijo',
      lastName: 'Snowden',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 24,
      firstName: 'Cammy',
      lastName: 'Whittle',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 25,
      firstName: 'Bethina',
      lastName: 'Mumbray',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 26,
      firstName: 'Cullen',
      lastName: 'Embury',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 27,
      firstName: 'Althea',
      lastName: 'Gittus',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 28,
      firstName: 'Vilhelmina',
      lastName: 'Michallat',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 29,
      firstName: 'Hedwiga',
      lastName: 'Spellessy',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 30,
      firstName: 'Brandy',
      lastName: 'Mitkin',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 31,
      firstName: 'Frants',
      lastName: 'Devall',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 32,
      firstName: 'Torrance',
      lastName: 'Enser',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 33,
      firstName: 'Sheilakathryn',
      lastName: 'Castagnaro',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 34,
      firstName: 'Marcelia',
      lastName: 'Akid',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 35,
      firstName: 'Astra',
      lastName: 'Nockells',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 36,
      firstName: 'Vlad',
      lastName: 'Naismith',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 37,
      firstName: 'Scarlet',
      lastName: 'Littlefield',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 38,
      firstName: 'Oralee',
      lastName: 'Mearing',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 39,
      firstName: 'Nathanael',
      lastName: 'Hawler',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 40,
      firstName: 'Amandie',
      lastName: 'Martyntsev',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 41,
      firstName: 'Marys',
      lastName: 'Leckey',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 42,
      firstName: 'Denyse',
      lastName: 'Balham',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 43,
      firstName: 'Cynde',
      lastName: 'Slaght',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 44,
      firstName: 'Lilas',
      lastName: 'Gartside',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 45,
      firstName: 'Torie',
      lastName: 'Screase',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 46,
      firstName: 'Miof mela',
      lastName: 'Kose',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 47,
      firstName: 'Gareth',
      lastName: 'Schwanden',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 48,
      firstName: 'Dela',
      lastName: 'Scullard',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 49,
      firstName: 'Sanson',
      lastName: 'Greave',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 50,
      firstName: 'Darice',
      lastName: 'Chaucer',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 51,
      firstName: 'Cyrille',
      lastName: 'Adamek',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 52,
      firstName: 'Maggie',
      lastName: 'Pears',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 53,
      firstName: 'Danette',
      lastName: 'Chillingsworth',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 54,
      firstName: 'Gert',
      lastName: 'Imrie',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 55,
      firstName: 'Norris',
      lastName: 'Muddicliffe',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 56,
      firstName: 'Carlo',
      lastName: 'Avrahamy',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 57,
      firstName: 'Ivor',
      lastName: 'Kunat',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 58,
      firstName: 'Dawna',
      lastName: 'Louth',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 59,
      firstName: 'Arturo',
      lastName: 'Habbert',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 60,
      firstName: 'Dwain',
      lastName: 'Adicot',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 61,
      firstName: 'Dorrie',
      lastName: 'Clampin',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 62,
      firstName: 'Julietta',
      lastName: 'Scutter',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 63,
      firstName: 'Sarina',
      lastName: 'McAlister',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 64,
      firstName: 'Carmine',
      lastName: 'Collymore',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 65,
      firstName: 'Alair',
      lastName: 'MacKenney',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 66,
      firstName: 'Krista',
      lastName: 'Connikie',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 67,
      firstName: 'Lorinda',
      lastName: 'Pottiphar',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 68,
      firstName: 'Doy',
      lastName: 'Slowley',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 69,
      firstName: 'Tally',
      lastName: 'Adami',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 70,
      firstName: 'Kamila',
      lastName: 'Fendley',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 71,
      firstName: 'Franky',
      lastName: 'Jordeson',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 72,
      firstName: 'Curr',
      lastName: 'Musicka',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 73,
      firstName: 'Laryssa',
      lastName: 'Cristofari',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 74,
      firstName: 'Kerry',
      lastName: 'Buffy',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 75,
      firstName: 'Dalli',
      lastName: 'Sheddan',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 76,
      firstName: 'Dani',
      lastName: 'Ellsbury',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 77,
      firstName: 'Dionne',
      lastName: 'Hubbock',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 78,
      firstName: 'Mirelle',
      lastName: 'Keats',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 79,
      firstName: 'Dyane',
      lastName: 'Ruslinge',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 80,
      firstName: 'Ilene',
      lastName: 'Lockitt',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 81,
      firstName: 'Yoshiko',
      lastName: 'Petett',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 82,
      firstName: 'Cate',
      lastName: 'Briant',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 83,
      firstName: 'Alexa',
      lastName: 'Teodoro',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 84,
      firstName: 'Ame',
      lastName: 'Corking',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 85,
      firstName: 'Edd',
      lastName: 'Whewill',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 86,
      firstName: 'Kaitlyn',
      lastName: 'Antcliff',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 87,
      firstName: 'Mellisent',
      lastName: 'Yakovlev',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 88,
      firstName: 'Myra',
      lastName: 'Barrie',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 89,
      firstName: 'Aube',
      lastName: 'Bettlestone',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 90,
      firstName: 'Haze',
      lastName: 'Laneham',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 91,
      firstName: 'Emmaline',
      lastName: 'Camps',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 92,
      firstName: 'Anson',
      lastName: 'Pedlar',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 93,
      firstName: 'Aprilette',
      lastName: 'Camillo',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 94,
      firstName: 'Lexine',
      lastName: 'Acuna',
      avatar: 'http://dummyimage.com/250x250.png/dddddd/000000',
      video: 'videos/video2.mp4'
    },
    {
      id: 95,
      firstName: 'Lonee',
      lastName: 'Ewen',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 96,
      firstName: 'Martguerita',
      lastName: 'Pearcey',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 97,
      firstName: 'Modestine',
      lastName: 'Baptiste',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 98,
      firstName: 'Jorey',
      lastName: 'Garie',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 99,
      firstName: 'Langston',
      lastName: 'Simon',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 100,
      firstName: 'Stirling',
      lastName: 'Lewendon',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video2.mp4'
    }
  ];
  let firstHalf = participants.slice(0, participants.length / 2);
  let secondHalf = participants.slice(participants.length / 2);

  function createList(array) {
    return (
      <ul className="flex overflow-x-scroll hide-scrollbars">
        {array.map(function (user) {
          return (
            <li
              className="relative flex flex-col items-center flex-none w-24 m-2 text-center"
              key={user.id}
            >
              {/* <video
                autoPlay={true}
                loop={true}
                muted={true}
                src={user.video}
                className="object-cover mb-2 rounded-full w-28 h-28"
              ></video> */}
              <img
                className="object-cover w-20 h-20 mb-2 rounded-full"
                src={user.avatar}
                alt={'Photo of ' + user.firstName + '' + user.lastName}
              />
              <span className="text-xs text-white">
                {user.firstName} {user.lastName}
              </span>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 px-4 py-8 participants-wrapper">
      {createList(firstHalf)}
      {createList(secondHalf)}
    </div>
  );
}
