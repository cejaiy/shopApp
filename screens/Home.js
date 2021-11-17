import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, FlatList} from "react-native";
import { icons,images, SIZES, COLORS, FONTS } from '../constants'


const Home = ({ navigation }) => {
  const categoryData = [
      {
          id: 1,
          name: "Sofa Chair",
          icon: icons.sofa,
      },
      {
          id: 2,
          name: "Folding",
          icon: icons.foldingchair,
      },
      {
          id: 3,
          name: "egg",
          icon: icons.eggchair,
      },
      {
          id: 4,
          name: "Arm chair",
          icon: icons.armchair,
      },
      {
          id: 5,
          name: "Stool",
          icon: icons.stool,
      },
      {
          id: 6,
          name: "Rocking",
          icon: icons.rockingchair,
      },
      {
          id: 7,
          name: "Executive",
          icon: icons.executivechair,
      },
      {
          id: 8,
          name: "cuddler",
          icon: icons.cuddlerchair,
      },
      {
          id: 9,
          name: "Deck chair",
          icon: icons.deckchair,
      },
  ]

  // Rates
  const affordable  = 1
  const expensive = 2

  const chairData = [
      //sofa images
      {
        id: 1,
          name: "Mr. Eddie's Special Sofa Chair",
          rating: 4.5,
          categories: [1],
          priceRating: expensive,
          photo: images.sofa2,
          discount: "5-10% off",
        
        menu: [
            {
                menuId: 1,
                name: "Sofa Chair",
                photo: images.sofa3,
                description: "Highly mentainable Sofa",
                durability: 95,
                price: 100
            },
            {
                menuId: 2,
                name: "sofa Chair",
                photo: images.sofa4,
                description: "Living Room soft Sofa Chair",
                durability: 90,
                price: 120
            },
            {
                menuId: 3,
                name: "Sofa Chair",
                photo: images.sofa5,
                description: "Water-proof Sofa chair",
                durability: 75,
                price: 200
            },
            {
                menuId: 4,
                name: "Sofa Chair",
                photo: images.sofa6,
                description: "Soft Sofa chair",
                durability: 50,
                price: 200
            },
            {
                menuId: 5,
                name: "Sofa Chair",
                photo: images.sofa7,
                description: "Pure Leather Sofa chair",
                durability: 70,
                price: 200
            },
            {
                menuId: 6,
                name: "Sofa Chair",
                photo: images.sofa8,
                description: "Water-proof Sofa chair",
                durability: 70,
                price: 200
            },
            {
                menuId: 7,
                name: "Sofa Chair",
                photo: images.sofa9,
                description: "High quality Sofa chair",
                durability: 88,
                price: 200
            },
            {
                menuId: 8,
                name: "Sofa Chair",
                photo: images.sofa10,
                description: "Water-proof Sofa chair",
                durability: 96,
                price: 200
            },
            {
                menuId: 9,
                name: "Sofa Chair",
                photo: images.sofa11,
                description: "New Sofa chair",
                durability: 98,
                price: 200
            }, {
                menuId: 10,
                name: "Sofa Chair",
                photo: images.sofa12,
                description: "luxurous Sofa chair",
                durability: 1100,
                price: 200
            },
        ]
    },
    {
        id: 2,
        name: "Folding Chair",
        rating: 4.8,
        categories: [2],
        priceRating: affordable,
        photo: images.folding1,
        discount: "15% off",
      
        menu: [
            {
                menuId: 11,
                name: "Folding Chair",
                photo: images.folding2,
                description: "High quality folding chair",
                durability: 50,
                price: 15
            },
            {
                menuId: 12,
                name: "Folding Chair",
                photo: images.folding3,
                description: "High quality folding chair",
                durability: 80,
                price: 15
            },
            {
                menuId: 13,
                name: "Folding Chair",
                photo: images.folding4,
                description: "High quality folding chair",
                durability: 100,
                price: 15
            },
            {
                menuId: 14,
                name: "Folding Chair",
                photo: images.folding1,
                description: "High quality folding chair",
                durability: 90,
                price: 15
            },
            {
                menuId: 15,
                name: "Folding Chair",
                photo: images.folding6,
                description: "High quality folding chair",
                durability: 50,
                price: 15
            },
            {
                menuId: 16,
                name: "Folding Chair",
                photo: images.folding7,
                description: "High quality folding chair",
                durability: 50,
                price: 15
            },
            {
                menuId: 17,
                name: "Folding Chair",
                photo: images.folding8,
                description: "High quality folding chair",
                durability: 50,
                price: 15
            },
            {
                menuId: 18,
                name: "Folding Chair",
                photo: images.folding9,
                description: "High quality folding chair",
                durability: 50,
                price: 15
            },
            {
                menuId: 19,
                name: "Folding Chair",
                photo: images.folding10,
                description: "High quality folding chair",
                durability: 50,
                price: 15
            },
            
        ]
    },
    {
        id: 3,
        name: "Egg chair",
        rating: 4.8,
        categories: [3],
        priceRating: expensive,
        photo: images.eggchair3,
        discount: "5% off",  
       
        menu: [
            {
                menuId: 20,
                name: "Egg chair",
                photo: images.eggchair3,
                description: "Outdoor Egg Chair",
                durability: 100,
                price: 20
            },
            {
                menuId: 21,
                name: "Egg chair",
                photo: images.eggchair4,
                description: "Summer Egg Chair",
                durability: 90,
                price: 20
            },
            {
                menuId: 22,
                name: "Egg chair",
                photo: images.eggchair5,
                description: "Outdoor Egg Chair",
                durability: 95,
                price: 20
            },
            {
                menuId: 23,
                name: "Egg chair",
                photo: images.eggchair6,
                description: "Outdoor Egg Chair",
                durability: 70,
                price: 50
            },
            {
                menuId: 24,
                name: "Egg chair",
                photo: images.eggchair7,
                description: "Outdoor Egg Chair",
                durability: 100,
                price: 20
            },
            {
                menuId: 25,
                name: "Egg chair",
                photo: images.eggchair8,
                description: "Outdoor Egg Chair",
                durability: 55,
                price: 40
            },
            {
                menuId: 26,
                name: "Egg chair",
                photo: images.eggchair9,
                description: "Outdoor Egg Chair",
                durability: 60,
                price: 89
            },
            {
                menuId: 27,
                name: "Egg chair",
                photo: images.eggchair10,
                description: "Outdoor Egg Chair",
                durability: 60,
                price: 33
            }
        ]
    },
    {
        id: 4,
        name: "Armchair",
        rating: 4.9,
        categories: [4],
        priceRating: affordable,
        photo: images.armchair1,
        discount : "20% off",
        
        menu: [
            {
                menuId: 28,
                name: "Armchair",
                photo: images.armchair2,
                description: "High Leather Arm Chair",
                durability: 90,
                price: 200
            },
            {
                menuId: 29,
                name: "Armchair",
                photo: images.armchair3,
                description: "Leather Arm chair",
                durability: 80,
                price: 150
            },
            {
                menuId: 30,
                name: "Armchair",
                photo: images.armchair4,
                description: "Highly Mentained",
                durability: 100,
                price: 400
            },
            {
                menuId: 31,
                name: "Armchair",
                photo: images.armchair5,
                description: "Moderately furnished",
                durability: 90,
                price: 250
            },
            {
                menuId: 32,
                name: "Armchair",
                photo: images.armchair6,
                description: "Newly Made",
                durability: 90,
                price: 200
            },
            {
                menuId: 33,
                name: "Armchair",
                photo: images.armchair7,
                description: "Water proof",
                durability: 90,
                price: 500
            },
            {
                menuId: 34,
                name: "Armchair",
                photo: images.armchair9,
                description: "Decate's Favourite",
                durability: 90,
                price: 255
            },
            {
                menuId: 35,
                name: "Armchair",
                photo: images.armchair10,
                description: "Uncle Jones Arm chair",
                durability: 90,
                price: 200
            }
        ]
    },
    {
        id: 5,
        name: "Fidels Stool Chair",
        rating: 4.6,
        categories: [5],
        priceRating: affordable,
        photo: images.stool7,
        discount : "5% off",
        
        menu: [
            {
                menuId: 36,
                name: "Stool Chair",
                photo: images.stool2,
                description: "Wooden Stool",
                durability: 70,
                price: 30
            },
            {
                menuId: 37,
                name: "Stool Chair",
                photo: images.stool3,
                description: "Wooden Stool",
                durability: 70,
                price: 30
            },
            {
                menuId: 38,
                name: "Stool Chair",
                photo: images.stool4,
                description: "Wooden Stool",
                durability: 70,
                price: 20
            },
            {
                menuId: 39,
                name: "Stool Chair",
                photo: images.stool8,
                description: "Wooden Stool",
                durability: 70,
                price: 30
            },
            {
                menuId: 40,
                name: "Stool Chair",
                photo: images.stool9,
                description: "Wooden Stool",
                durability: 70,
                price: 30
            },
            

        ]
    },
    {
        id: 6,
        name: "Daddy Bob's Rocking Chair",
        rating: 4.9,
        categories: [6],
        priceRating: affordable,
        photo: images.rocking3,
        discount : "30% off",
        
        menu: [
            {
                menuId: 41,
                name: "Rocking Chair",
                photo: images.armchair3,
                description: "New Sales",
                durability: 100,
                price: 50
            },
            {
                menuId: 42,
                name: "Rocking Chair",
                photo: images.armchair4,
                description: "New Sales",
                durability: 100,
                price: 50
            },
            {
                menuId: 43,
                name: "Rocking Chair",
                photo: images.armchair5,
                description: "New Sales",
                durability: 100,
                price: 50
            },
            {
                menuId: 44,
                name: "Rocking Chair",
                photo: images.armchair6,
                description: "New Sales",
                durability: 100,
                price: 50
            },
            {
                menuId: 45,
                name: "Rocking Chair",
                photo: images.armchair7,
                description: "New Sales",
                durability: 100,
                price: 50
            },
            {
                menuId: 46,
                name: "Rocking Chair",
                photo: images.armchair8,
                description: "New Sales",
                durability: 100,
                price: 50
            },
            {
                menuId: 47,
                name: "Rocking Chair",
                photo: images.armchair9,
                description: "New Sales",
                durability: 100,
                price: 50
            },
            {
                menuId: 48,
                name: "Rocking Chair",
                photo: images.armchair10,
                description: "New Sales",
                durability: 100,
                price: 50
            }
        ]
    },
    {
        id: 7,
        name: "Sets of Executive Chairs",
        rating: 4.9,
        categories: [7],
        priceRating: expensive,
        photo: images.executive10,
        discount : "20% off",
        
        menu: [
            {
                menuId: 49,
                name: "Ececutive Chair sets",
                photo: images.executive10,
                description: "High Value Executive Chairs",
                durability: 95,
                price: 700
            },
            {
                menuId: 50,
                name: "Executive Chairs",
                photo: images.executive1,
                description: "High Value Executive Chairs",
                durability: 95,
                price: 700
            },
            {
                menuId: 51,
                name: "Executive Chairs",
                photo: images.executive2,
                description: "High Value Executive Chairs",
                durability: 95,
                price: 700
            },
            {
                menuId: 52,
                name: "Executive Chair",
                photo: images.executive3,
                description: "High Value Executive Chairs",
                durability: 95,
                price: 700
            },
            {
                menuId: 53,
                name: "Executive Chair",
                photo: images.executive4,
                description: "High Value Executive Chairs",
                durability: 95,
                price: 700
            },
            {
                menuId: 54,
                name: "Executive Chair",
                photo: images.executive5,
                description: "High Value Executive Chairs",
                durability: 95,
                price: 700
            },
            {
                menuId: 55,
                name: "Executive Chair",
                photo: images.executive6,
                description: "High Value Executive Chairs",
                durability: 95,
                price: 700
            },
            {
                menuId: 56,
                name: "Executive Chair",
                photo: images.executive7,
                description: "High Value Executive Chairs",
                durability: 95,
                price: 700
            },
            {
                menuId: 57,
                name: "Executive Chair",
                photo: images.executive8,
                description: "High Value Executive Chairs",
                durability: 95,
                price: 700
            }
        ]
    },
    {
        
        id: 8,
        name: "Cuddler Chair",
        rating: 4.9,
        categories: [8],
        priceRating: expensive,
        photo: images.cuddler3,
        discount : "20% off",
     
        menu: [
            {
                menuId: 58,
                name: "Cuddler Chair",
                photo: images.cuddler1,
                description: "Personal Cuddler CHair",
                durability: 200,
                price: 35
            },
            {
                menuId: 59,
                name: "Cuddler Chair",
                photo: images.cuddler2,
                description: "Sleep in Cuddler ",
                durability: 300,
                price: 40
            },
            {
                menuId: 60,
                name: "Cuddler Chair",
                photo: images.cuddler4,
                description: "Customised",
                durability: 300,
                price: 70
            },
            {
                menuId: 61,
                name: "Cuddler Chair",
                photo: images.cuddler5,
                description: "Highly Made",
                durability: 300,
                price: 80
            },
            {
                menuId: 62,
                name: "Cuddler Chair",
                photo: images.cuddler6,
                description: "Highly Made",
                durability: 300,
                price: 80
            },
            {
                menuId: 63,
                name: "Cuddler Chair",
                photo: images.cuddler7,
                description: "Newly Made",
                durability: 300,
                price: 80
            },
            {
                menuId: 64,
                name: "Cuddler Chair",
                photo: images.cuddler3,
                description: "Highly Made",
                durability: 200,
                price: 80
            }

        ]
    },
    {

        id: 9,
         name: "Special Deck Chair",
         rating: 4.5,
         categories: [9],
         priceRating: expensive,
         photo: images.deck1,
         discount: "10.50% off",
     
        menu: [
            {
                menuId: 65,
                name: "Deck Chair",
                photo: images.deck2,
                description: "Special Made",
                durability: 100,
                price: 640
            },
            {
                menuId: 66,
                name: "Deck Chair",
                photo: images.deck3,
                description: "Free Delivery!",
                durability: 100,
                price: 500
            },
            {
                menuId: 67,
                name: "Deck Chair",
                photo: images.deck4,
                description: "Highly Furnished",
                durability: 95,
                price: 400
            },
            {
                menuId: 68,
                name: "Deck Chair",
                photo: images.deck5,
                description: "Highly Furnished",
                durability: 95,
                price: 450
            }
        ]
        
    }


]

  const [categories, setCategories] = React.useState(categoryData)
  const [selectedCategory, setSelectedCategory] = React.useState(null)
  const [chairbrands, setChairbrands] = React.useState(chairData)
 


  function onSelectCategory(category) {
      //chair filtering
      let chairList = chairData.filter(a => a.categories.includes(category.id))

      setChairbrands(chairList)

      setSelectedCategory(category)
  }

  function getCategoryNameById(id) {
      let category = categories.filter(a => a.id == id)

      if (category.length > 0)
          return category[0].name

      return ""
  }

  function renderHeader() {
      return (
          <View style={{ flexDirection: 'row', height: 50 }}>
              <TouchableOpacity
                  style={{
                      width: 50,
                      paddingTop: SIZES.padding * 5.0,
                      paddingLeft: SIZES.padding * 1.5,
                      justifyContent: 'center',
                     
                  }}
              >
                  <Image
                      source={icons.bluelogo}
                      resizeMode="contain"
                      style={{
                          width: 70,
                          height: 100
                      }}
                  />
              </TouchableOpacity>

              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <View
                      style={{
                          width: '70%',
                          height: "100%",
                          backgroundColor: COLORS.lightGray3,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: SIZES.radius
                      }}
                  >
                     <Text style={{ ...FONTS.h3 }}>{'Accra'}</Text>  
                  </View>
              </View>

              <TouchableOpacity
                  style={{
                      width: 50,
                      paddingRight: SIZES.padding * 2,
                      justifyContent: 'center'
                  }}
              >
                  <Image
                      source={icons.cart}
                      resizeMode="contain"
                      style={{
                          width: 30,
                          height: 30
                      }}
                  />
              </TouchableOpacity>
          </View>
      )
  }

  function renderMainCategories() {
      const renderItem = ({ item }) => {
          return (
              <TouchableOpacity
                  style={{
                      padding: SIZES.padding,
                      paddingBottom: SIZES.padding * 2,
                      backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                      borderRadius: SIZES.radius,
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: SIZES.padding,
                      ...styles.shadow
                  }}
                  onPress={() => onSelectCategory(item)}
              >
                  <View
                      style={{
                          width: 50,
                          height: 50,
                          borderRadius: 25,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                      }}
                  >
                      <Image
                          source={item.icon}
                          resizeMode="contain"
                          style={{
                              width: 30,
                              height: 30
                          }}
                      />
                  </View>

                  <Text
                      style={{
                          marginTop: SIZES.padding,
                          color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                          ...FONTS.body5
                      }}
                  >
                      {item.name}
                  </Text>
              </TouchableOpacity>
          )
      }

      return (
          <View style={{ padding: SIZES.padding * 2 }}>
              <Text style={{ ...FONTS.h1, paddingTop: SIZES.padding * 2.5 }}>Make Your</Text>
              <Text style={{ ...FONTS.h1 }}>Choice</Text>

              <FlatList
                  data={categories}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => `${item.id}`}
                  renderItem={renderItem}
                  contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
              />
          </View>
      )
  }

  function renderChairbrandList() {
      const renderItem = ({ item }) => (
          <TouchableOpacity
              style={{ marginBottom: SIZES.padding * 2 }}
            
              onPress={() => navigation.navigate("ChairDetails", {item})}
          >
              {/* Chair Image */}
              <View
                  style={{
                      marginBottom: SIZES.padding
                  }}
              >
                  <Image
                      source={item.photo}
                      resizeMode="cover"
                      style={{
                          width: "100%",
                          height: 200,
                          borderRadius: SIZES.radius
                      }}
                  />

                  <View
                      style={{
                          position: 'absolute',
                          bottom: 0,
                          height: 50,
                          width: SIZES.width * 0.3,
                          backgroundColor: COLORS.white,
                          borderTopRightRadius: SIZES.radius,
                          borderBottomLeftRadius: SIZES.radius,
                          alignItems: 'center',
                          justifyContent: 'center',
                          ...styles.shadow
                      }}
                  >
                      <Text style={{ ...FONTS.h4 }}>{item.discount}</Text>
                  </View>
              </View>

              {/* Chair Info */}
              <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

              <View
                  style={{
                      marginTop: SIZES.padding,
                      flexDirection: 'row'
                  }}
              >
                  {/* Rates */}
                  <Image
                      source={icons.star}
                      style={{
                          height: 20,
                          width: 20,
                          tintColor: COLORS.primary,
                          marginRight: 10
                      }}
                  />
                  <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                  {/* Categories */}
                  <View
                      style={{
                          flexDirection: 'row',
                          marginLeft: 10
                      }}
                  >
                      {
                          item.categories.map((categoryId) => {
                              return (
                                  <View
                                      style={{ flexDirection: 'row' }}
                                      key={categoryId}
                                  >
                                      <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                      <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                  </View>
                              )
                          })
                      }

                      {/* Pricing */}
                      {
                          [1, 2].map((priceRating) => (
                              <Text
                                  key={priceRating}
                                  style={{
                                      ...FONTS.body3,
                                      color: (priceRating <= item.priceRating) ? COLORS.primary : COLORS.darkgray
                                  }}
                              >$</Text>
                          ))
                      }
                  </View>
              </View>
          </TouchableOpacity>
      )

      return (
          <FlatList
              data={chairbrands}
              keyExtractor={item => `${item.id}`}
              renderItem={renderItem}
              contentContainerStyle={{
                  paddingHorizontal: SIZES.padding * 2,
                  paddingBottom: 30
              }}
          />
      )
  }

  return (
      <SafeAreaView style={styles.container}>
          {renderHeader()}
          {renderMainCategories()}
          {renderChairbrandList()}
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: COLORS.lightGray4
  },
  shadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 1,
  }
})

export default Home