import React, { createContext } from "react"

export const localHotel = [
    {
      id: 1,
      name:  'Catalonia Porto',
      url: 'https://storage.googleapis.com/static-content-hc/sites/default/files/pro-webp/catalonia_porto_recepcion.webp',
      categories: ["Hotel", "Bar"],
      price: '$$',
      reviews: 1244,
      rating: 4.6,
      city: 'Catalonia',
      description: 'Отель Catalonia Porto - это 4-звездочный отель расположенный в самом центре Порту. Среди удобств отеля стоит отметить бассейн и джакузи, которые вы найдете во дворе волшебного сада. В отеле также есть полностью оборудованный спа-салон, фитнес-центр и снэк-бар.',
      rooms: [
      { 
          id: 999,
          type: 'Двухместный номер',
          beds: 1,
          bedType: "KING",
          guests: 2,
          price: 55,
          available: true,
          img: [
              {url: 'https://storage.googleapis.com/static-content-hc/sites/default/files/pro-webp/cataloina_porto_terraza.webp'},
              {url:'https://storage.googleapis.com/static-content-hc/sites/default/files/pro-webp/cataloina_porto_terraza2.webp'},
              {url:'https://storage.googleapis.com/static-content-hc/sites/default/files/pro-webp/cataloina_porto_terraza_lavabo.webp'},
              {url: 'https://storage.googleapis.com/static-content-hc/sites/default/files/pro-webp/cataloina_porto_doble_balcon_0.webp'},
              {url:'https://storage.googleapis.com/static-content-hc/sites/default/files/pro-webp/cataloina_porto_doble_balcon3_0.webp'},
          ]
      },
      {
          id: 8,
          type: 'Двухместный номер с террасой',
          beds: 1,
          bedType: "KING",
          guests: 2,
          price: 76,
          available: false,
          img: [
              {url:'https://storage.googleapis.com/static-content-hc/sites/default/files/pro-webp/cataloina_porto_terraza2.webp'},
              {url:'https://storage.googleapis.com/static-content-hc/sites/default/files/pro-webp/cataloina_porto_terraza_lavabo.webp'},
              {url: 'https://storage.googleapis.com/static-content-hc/sites/default/files/pro-webp/cataloina_porto_doble_balcon_0.webp'},
              {url:'https://storage.googleapis.com/static-content-hc/sites/default/files/pro-webp/cataloina_porto_doble_balcon3_0.webp'},
          ]
      }
      ]
    },
    {
      id: 2,
      name: 'Palais Joseph Hotel',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg',
      categories: ["Hotel"],
      price: '$$',
      reviews: 1244,
      rating: 4.5,
      city: 'Holywood',
      description: 'Во всех апартаментах установлены телевизор с плоским экраном и стиральная машина. Собственная ванная комната с душем укомплектована феном. В распоряжении гостей полностью оборудованная кухня с микроволновой печью и гостиный уголок. В числе прочих удобств — холодильник, чайник и кофемашина.',
      rooms: [
          {
              id: 99,
              type: 'Улучшенный номер',
              beds: 1,
              bedType: "KING",
              guests: 2,
              price: 68,
              available: true,
              img: [
                  {url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/322246354.jpg?k=67faa400c8cdf7200f5b9648a94566cd3283f5765e73233e9f371764d055f4dd&o=&hp=1'},
                  {url:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/322245688.jpg?k=81c1dd0f2b5eb5ce32617cd49ff19fc325f1fed9b5ac6e04abebcd3d29825dab&o=&hp=1'},
                  {url:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/322246863.jpg?k=4dc58f6b9c4b5363a9daed8db088004c6ccae639bd03c35c8c978e97d46bf44f&o=&hp=1'}
              ]
          }
      ]
    },
    {
      id: 3,
      name: 'Ruby Marie Hotel Vienna',
      url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/59746392.jpg?k=33aec3e76aa88f55a5e7d6c127ceb823aae9fe25c4f3e98cb71f1d9223c5b039&o=&hp=1',
      categories: ["Hotel"],
      price: '$$',
      reviews: 127,
      rating: 4.6,
      city: 'Vienna',
      description: 'Современные номера оснащены кондиционером, телевизором с плоским экраном и спутниковыми каналами, современной аудиосистемой с усилителями Marshall и сейфом. В ванной комнате установлен тропический душ. Отличному сну способствуют роскошные пружинные матрасы.',
      rooms: [
          {
              id: 9,
              type: 'Улучшенный номер с террасой',
              beds: 1,
              bedType: "KING",
              guests: 2,
              price: 78,
              available: true,
              img: [
                  {url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/59805915.jpg?k=5a51df4e210d8b38cef07634c709dbffabf3ea9141e7a41fbc1ae9a8a7df2c3c&o='},
                  {url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/57858509.jpg?k=6f1b77ad8bee4b992df5ffe42bd839321b3c16f1e5cecc0b4980f4d3a1739482&o='},
                  {url:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/59805981.jpg?k=25bd232344a314889c8af3b20a2e43586a6941b3c5bb611f0b7fedb5af4502c2&o='},
                  {url:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/57859198.jpg?k=a7946d309b4a66cb532a929287ac18805d6a0fb8829d902ff7390f541aabe0c1&o='}
              ]
          }
      ]
    },
  ]
export const HotelContext = createContext()

export const HotelContextProvider = ({children}) => {
    return (
        <HotelContext.Provider value={localHotel}>
            {children}
        </HotelContext.Provider>
    )
}