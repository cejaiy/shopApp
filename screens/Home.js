import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, FlatList} from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { icons,images, SIZES, COLORS, FONTS } from '../constants'

const Home = ({ navigation }) => {

 

  const Location = {
      streetName: "Accra",
      
  
  }

  const categoryData = [
      {
          id: 1,
          name: "Sofa",
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
      {
          id: 10,
          name: "Park bench",
          icon: icons.parkbench,
      },

  ]

  // Rates
  const affordable  = 1
  const expensive = 2

  const chairData = [
      //sofa images
      { 
          id: 1,
          name: "Sofa Chair",
          rating: 4.5,
          categories: [1],
          priceRating: expensive,
          photo: images.sofa1,
          discount: "5-10% off",
      },
         
      {
        id: 1,
        name: "Sofa Chair",
        rating: 4.8,
        categories: [1],
        priceRating: affordable,
        photo: images.sofa2,
        discount: "15% off",
      },
      {
        id: 1,
        name: "Sofa Chair",
        rating: 4.8,
        categories: [1],
        priceRating: affordable,
        photo: images.sofa3,
        discount: "15% off",
      },
      {
        id: 1,
        name: "Sofa Chair",
        rating: 4.8,
        categories: [1],
        priceRating: affordable,
        photo: images.sofa4,
        discount: "15% off",
      },
      {
        id: 1,
        name: "Sofa Chair",
        rating: 4.8,
        categories: [1],
        priceRating: affordable,
        photo: images.sofa5,
        discount: "15% off",
      },
      {
        id: 1,
        name: "Sofa Chair",
        rating: 4.8,
        categories: [1],
        priceRating: affordable,
        photo: images.sofa6,
        discount: "15% off",
      },
      {
        id: 1,
        name: "Sofa Chair",
        rating: 4.8,
        categories: [1],
        priceRating: affordable,
        photo: images.sofa7,
        discount: "15% off",
      },
      {
        id: 1,
        name: "Sofa Chair",
        rating: 4.8,
        categories: [1],
        priceRating: affordable,
        photo: images.sofa8,
        discount: "15% off",
      },
      {
        id: 1,
        name: "Sofa Chair",
        rating: 4.8,
        categories: [1],
        priceRating: affordable,
        photo: images.sofa9,
        discount: "15% off",
      },
      {
        id: 1,
        name: "Sofa Chair",
        rating: 4.8,
        categories: [1],
        priceRating: affordable,
        photo: images.sofa10,
        discount: "15% off",
      },
      {
        id: 1,
        name: "Sofa Chair",
        rating: 4.8,
        categories: [1],
        priceRating: affordable,
        photo: images.sofa11,
        discount: "15% off",
      },
      {
        id: 1,
        name: "Sofa Chair",
        rating: 4.8,
        categories: [1],
        priceRating: affordable,
        photo: images.sofa12,
        discount: "15% off",
      },
      {
        id: 1,
        name: "Sofa Chair",
        rating: 4.8,
        categories: [1],
        priceRating: affordable,
        photo: images.sofa13,
        discount: "15% off",
      },
      {
        id: 1,
        name: "Sofa Chair",
        rating: 4.8,
        categories: [1],
        priceRating: affordable,
        photo: images.sofa14,
        discount: "15% off",
      },
      {
        id: 1,
        name: "Sofa Chair",
        rating: 4.8,
        categories: [1],
        priceRating: affordable,
        photo: images.sofa15,
        discount: "15% off",
      },

      //folding chairs images
      {
          id: 2,
          name: "Folding Chair",
          rating: 4.8,
          categories: [2],
          priceRating: expensive,
          photo: images.folding,
          discount: "5% off",  
      },
      {
        id: 2,
        name: "Folding Chair",
        rating: 4.8,
        categories: [2],
        priceRating: expensive,
        photo: images.folding1,
        discount: "5% off",  
    },
    {
        id: 2,
        name: "Folding Chair",
        rating: 4.8,
        categories: [2],
        priceRating: expensive,
        photo: images.folding2,
        discount: "5% off",  
    },
    {
        id: 2,
        name: "Folding Chair",
        rating: 4.8,
        categories: [2],
        priceRating: expensive,
        photo: images.folding3,
        discount: "5% off",  
    },
    {
        id: 2,
        name: "Folding Chair",
        rating: 4.8,
        categories: [2],
        priceRating: expensive,
        photo: images.folding4,
        discount: "5% off",  
    },
    {
        id: 2,
        name: "Folding Chair",
        rating: 4.8,
        categories: [2],
        priceRating: expensive,
        photo: images.folding5,
        discount: "5% off",  
    },
    {
        id: 2,
        name: "Folding Chair",
        rating: 4.8,
        categories: [2],
        priceRating: expensive,
        photo: images.folding6,
        discount: "5% off",  
    },
    {
        id: 2,
        name: "Folding Chair",
        rating: 4.8,
        categories: [2],
        priceRating: expensive,
        photo: images.folding7,
        discount: "5% off",  
    },
    {
        id: 2,
        name: "Folding Chair",
        rating: 4.8,
        categories: [2],
        priceRating: expensive,
        photo: images.folding8,
        discount: "5% off",  
    },
    {
        id: 2,
        name: "Folding Chair",
        rating: 4.8,
        categories: [2],
        priceRating: expensive,
        photo: images.folding9,
        discount: "5% off",  
    },
    {
        id: 2,
        name: "Folding Chair",
        rating: 4.8,
        categories: [2],
        priceRating: expensive,
        photo: images.folding10,
        discount: "5% off",  
    },

    //egg chair
      {   id: 3,
          name: "Egg chair",
          rating: 4.9,
          categories: [3],
          priceRating: affordable,
          photo: images.eggchair1,
          discount : "20% off",
      },
      {   id: 3,
        name: "Egg chair",
        rating: 4.9,
        categories: [3],
        priceRating: affordable,
        photo: images.eggchair3,
        discount : "20% off",
        
    },
    {   id: 3,
        name: "Egg chair",
        rating: 4.9,
        categories: [3],
        priceRating: affordable,
        photo: images.eggchair4,
        discount : "20% off",
    },
    {   id: 3,
        name: "Egg chair",
        rating: 4.9,
        categories: [3],
        priceRating: affordable,
        photo: images.eggchair5,
        discount : "20% off",
    },
    {   id: 3,
        name: "Egg chair",
        rating: 4.9,
        categories: [3],
        priceRating: affordable,
        photo: images.eggchair2,
        discount : "20% off",
    },
    {   id: 3,
        name: "Egg chair",
        rating: 4.9,
        categories: [3],
        priceRating: affordable,
        photo: images.eggchair6,
        discount : "20% off",
    },
    {   id: 3,
        name: "Egg chair",
        rating: 4.9,
        categories: [3],
        priceRating: affordable,
        photo: images.eggchair7,
        discount : "20% off",
    },
    {   id: 3,
        name: "Egg chair",
        rating: 4.9,
        categories: [3],
        priceRating: affordable,
        photo: images.eggchair8,
        discount : "20% off",
    },
    {   id: 3,
        name: "Egg chair",
        rating: 4.9,
        categories: [3],
        priceRating: affordable,
        photo: images.eggchair9,
        discount : "20% off",
    },
    {   id: 3,
        name: "Egg chair",
        rating: 4.9,
        categories: [3],
        priceRating: affordable,
        photo: images.eggchair10,
        discount : "20% off",
    },

    //Egg chair images
    {   id: 4,
        name: "Armchair",
        rating: 4.9,
        categories: [4],
        priceRating: affordable,
        photo: images.armchair1,
        discount : "20% off",
    },
    {   id: 4,
        name: "Armchair",
        rating: 4.9,
        categories: [4],
        priceRating: affordable,
        photo: images.armchair2,
        discount : "20% off",
    },
    {   id: 4,
        name: "Armchair",
        rating: 4.9,
        categories: [4],
        priceRating: affordable,
        photo: images.armchair3,
        discount : "20% off",
    },
    {   id: 4,
        name: "Armchair",
        rating: 4.9,
        categories: [4],
        priceRating: affordable,
        photo: images.armchair4,
        discount : "20% off",
    },
    {   id: 4,
        name: "Armchair",
        rating: 4.9,
        categories: [4],
        priceRating: affordable,
        photo: images.armchair5,
        discount : "20% off",
    },
    {   id: 4,
        name: "Armchair",
        rating: 4.9,
        categories: [4],
        priceRating: affordable,
        photo: images.armchair6,
        discount : "20% off",
    },
    {   id: 4,
        name: "Armchair",
        rating: 4.9,
        categories: [4],
        priceRating: affordable,
        photo: images.armchair7,
        discount : "20% off",
    },
    {   id: 4,
        name: "Armchair",
        rating: 4.9,
        categories: [4],
        priceRating: affordable,
        photo: images.armchair8,
        discount : "20% off",
    },
    {   id: 4,
        name: "Armchair",
        rating: 4.9,
        categories: [4],
        priceRating: affordable,
        photo: images.armchair9,
        discount : "20% off",
    },
    {   id: 4,
        name: "Armchair",
        rating: 4.9,
        categories: [4],
        priceRating: affordable,
        photo: images.armchair10,
        discount : "20% off",
    },
    
    {
        id: 5,
        name: "Stool Chair",
        rating: 4.8,
        categories: [5],
        priceRating: affordable,
        photo: images.stool2,
        discount: "15% off",
    

    
            
      },
      {

          id: 6,
          name: "Rocking Chair",
          rating: 4.9,
          categories: [6],
          priceRating: expensive,
          photo: images.rocking1,
          discount : "20% off",

      },
      {
          id: 7,
         name: "Stool Chair",
         rating: 4.8,
         categories: [7],
         priceRating: affordable,
         photo: images.stool2,
         discount: "15% off",
    },
    {
        id: 8,
        name: "Stool Chair",
        rating: 4.8,
        categories: [8],
        priceRating: affordable,
        photo: images.stool2,
        discount: "15% off",
      },
      {
        id: 9,
        name: "Stool Chair",
        rating: 4.8,
        categories: [9],
        priceRating: affordable,
        photo: images.stool2,
        discount: "15% off",
      },
      {
        id: 10,
        name: "Stool Chair",
        rating: 4.8,
        categories: [10],
        priceRating: affordable,
        photo: images.stool2,
        discount: "15% off",
      }
  ]

  const [categories, setCategories] = React.useState(categoryData)
  const [selectedCategory, setSelectedCategory] = React.useState(null)
  const [chairbrands, setChairbrands] = React.useState(chairData)
 


  function onSelectCategory(category) {
      //filter chairs
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
                      justifyContent: 'center',
                     
                  }}
              >
                  <Image
                      source={icons.bluelogo}
                      resizeMode="contain"
                      style={{
                          width: 110,
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

  function renderChairList() {
      const renderItem = ({ item }) => (
          <TouchableOpacity
              style={{ marginBottom: SIZES.padding * 2 }}
            
              onPress={() => navigation.navigate("ChairDetails", {
                  item
              })}
          >
              {/* Image */}
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
          {renderChairList()}
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