// import Foundation

// /// Parses a list of content data, brand preferences, and content type preferences, and returns the top 5 titles by score.
// ///
// /// Titles must be available in the US on or before January 1, 2020.
// ///
// /// - Parameters:
// ///   - contentData: The list of content data as a JSON `String`.
// ///   - brandPreferences: The brand preferences object as a JSON `String`.
// ///   - contentTypePreferences: The content type preferences object as a JSON `String`.
// /// - Returns: The top 5 titles available in the US on or before January 1, 2020, sorted by score (highest to lowest).
// func getTopTitles(contentData: String, brandPreferences: String, contentTypePreferences: String) -> [String] {
//     let content = convertContentData(contentData)
//     let brandPreferences = convertPreferences(brandPreferences)
//     let contentTypePreferences = convertPreferences(contentTypePreferences)
    
//      // print(content)
     
//     var topContent: [Content] = []
//     // print(type(of: topContent)). //===> Array<Content>
//     // print(type(of: content))
   
//     // _________________________________________________________________________________
//     // topContent.append(solution in content as! [Content])

//        // TODO: Implement your logic here.
       
//     // print(contentData)
//         // [solution.Content(title: "Lady and the Tramp", brand: "Disney", availability: ["US", "ES"], 
//         // availableDate: 2019-09-03 22:00:00 +0000, popularityScore: 75, contentType: "movie"), solution.Content(title:...
    
//     // print(brandPreferences)
//         // ["Marvel": "like", "Disney": "like", "Pixar": "like", "Star Wars": "love"]
    
//     //  print(contentTypePreferences)
//         //  ["series": "love"]
    
//     // let numberOfLegs = ["spider": 8, "ant": 6, "cat": 4]
//     // for (animalName, legCount) in numberOfLegs {
//     //     print("\(animalName)s have \(legCount) legs")
//     // }
//     var scoreChangeDict: [String: Int] = [:]
//     scoreChangeDict["dislike"] = -20
//     scoreChangeDict["indifferent"] = 0
//     scoreChangeDict["like"] = 10
//     scoreChangeDict["adore"] = 30
//     scoreChangeDict["love"] = 50
//     // print(scoreChangeDict)

//     // var finalDictionary: [String: Int] = [:]
//     // var i: Int
//     var i = 0
    
//     // let newSolution = solution in content as! [Content]
//     // print (newSolution)
    
//     // print (content)

//     for solution in content as! [Content] {
        
//         // topContent.append(solution.title)
//             // print (topContent)
//         // print(type(of: solution))
//             // Content
            
//         // ^^ I don't know if this is the right way to do this...found above "as! [Content]"" in solution on Stack Overflow here:
//         // https://stackoverflow.com/questions/27218669/swift-dictionary-get-key-for-value/41386238
        
//         let date1 = solution.availableDate
//         var date2:Date?
        
//         let availableDateBefore = "01/01/2020"
//         let formatter = DateFormatter()
//         formatter.dateFormat = "MM/dd/yyyy"
//         date2 = formatter.date(from: availableDateBefore)
//         // print(type(of: date2!))
//         // print (date2! >= date1)
       
//         if solution.availability.contains("US") && date2! >= date1 {
            
//             let startingScore = solution.popularityScore
//             // print(solution.popularityScore +)
//             // print(scoreChangeDict["dislike"]!) //===> -20
            
//     // ----------brand---------------------------------------------------------------- 
//             // print (solution.brand)  //===> Disney
//             var brand: String
//             brand = solution.brand
//             // print(type(of: brand))
//             //  print(type(of: brandPreferences))
//             // print(brandPreferences[brand])
//             // let valueOfBrandPreferences = brandPreferences[brand]
//             // print(Optional("like").toString)
      
//             var brandPreferenceValueNeeded: String
            
//             if let valueBrandPreferenceKey = brandPreferences[brand] {
//                 brandPreferenceValueNeeded = valueBrandPreferenceKey
//             } else {
//                 brandPreferenceValueNeeded = "indifferent"
//             }
//             // print (brandPreferenceValueNeeded)
            
//     // ----------contentType----------------------------------------------------------------    
//             var contentType: String
//             contentType = solution.contentType
//             var contentTypeValueNeeded: String
            
//             if let valueContentTypeKey = contentTypePreferences[contentType] {
//                 contentTypeValueNeeded = valueContentTypeKey
//             } else {
//                 contentTypeValueNeeded = "indifferent"
//             }
//             // print (contentTypeValueNeeded)
//             // print(brandPreferenceValueNeeded, contentTypeValueNeeded)
            
//     // ----------brandPreferenceValue----------------------------------------------------------------
     
//             var brandPreferenceValue: Int
//             brandPreferenceValue = scoreChangeDict[brandPreferenceValueNeeded]!
//             // print (brandPreferenceValue)
            
//     // ----------contentTypePreferenceValue----------------------------------------------------------------
    
//             var contentTypePreferenceValue: Int
//             contentTypePreferenceValue = scoreChangeDict[contentTypeValueNeeded]!
//             // print(contentTypePreferenceValue)
            
//     // ----------add 3 values together ----------------------------------------------------------------
//             var overallScore: Int
//             overallScore = startingScore + brandPreferenceValue + contentTypePreferenceValue
//             // print (startingScore, brandPreferenceValue, contentTypePreferenceValue)
//             // print (startingScore + brandPreferenceValue + contentTypePreferenceValue)
//             // print (overallScore)
            
//     // ----------adding title, score to  ----------------------------------------------------------------
//             // print(topContent)
//             // topContent.append()
//             // var solutionTitle: String
//             // solutionTitle = solution.title
            
//             // print (solutionTitle)
//             // topContent[solutionTitle] = [overallScore]
//             // print(topContent)
            
//             // print(overallScore, solution.popularityScore)
//             // solution.popularityScore = overallScore
//             // print(solution.popularityScore)
            
            
//             // topContent.title = solutionTitle
//             // topContent.popularityScore = overallScore
//             // topContent.append({"title"; solutionTitle})
//             // topContent.append({"popularityScore"; overallScore})
        
    
//         // topContent.append(Content(title: solutionTitle, popularityScore: overallScore))
//         // print(solutionTitle, overallScore)
//         // var newObject = Content(title: solutionTitle, popularityScore: overallScore)
//         // topContent.insert(newObject, at: i)
//         // topContent.insert (Content(title: solutionTitle, popularityScore: overallScore), at: i)
        
        
        
//         // do {
//         //     let newContent = Content(title: solutionTitle, popularityScore: overallScore)
//         //     let encoder = JSONEncoder()
//         //     let data = try encoder.encode(newContent)
//         //     topContent.append(data)
//         // } catch {
//         //     print("Whoops, an error occured: \(error)")
//         // }
        
//             let hd = solution
//             // print(hd)
//             // topContent = hd
//             topContent.append(hd)
//             // print (topContent[i].popularityScore)
//             // topContent.append(solution)
//             topContent[i].popularityScore = overallScore
           
//             // print (topContent[i].popularityScore)
//             // print(solution)
//             // print(topContent)
//             // topContent = solution as Content
        
            
//             i += 1
            
//             // finalDictionary[solutionTitle] = overallScore
//         }
//         // print (solution)
//             // // Content(title: "Lady and the Tramp", brand: "Disney", availability: ["US", "ES"],
//             // // availableDate: 2019-09-03 22:00:00 +0000, popularityScore: 75, contentType: "movie")
            
//         // print (solution.title)
//             // Lady and the Tramp
//             // Wicked Tuna: Man V. Storm
//             // Coco
//             // Stargirl
//             // Hamilton
//             // Avatar
//             // Chapter 1: The Mandalorian
        
//         // print (solution.popularityScore, solution.brand)
//             // 75 Disney
//     }
//     // print (finalDictionary)
    
    
    
//     // var sortedKeys = Array(dict.keys).sorted({dict[$0] < dict[$1]})
//     // topContent = Array(finalDictionary.keys).sorted({finalDictionary[$0] < finalDictionary[$1]})
    
//     // print(topContent)
//     let newTopContent = topContent.sorted(by: { $0.title < $1.title })
//     topContent = newTopContent.sorted(by: { $0.popularityScore > $1.popularityScore })
    
//     // topContent = topContent.sorted(by: { $0.popularityScore == $1.popularityScore ? $0.title < $1.title : $0.popularityScore < $1.popularityScore  }
//     // print(topContent)
    
  
//     // _________________________________________________________________________________
//     return topContent.prefix(5).map { content in content.title }
// }

// // Everything below here is provided as is and shouldn't require modification.

// // MARK: - Models

// struct Content: Codable {
//     let title: String
//     let brand: String
//     let availability: [String]
//     let availableDate: Date
//     var popularityScore: Int
//     let contentType: String
// }

// // MARK: - Helpers

// /// Converts a list of content data as a JSON `String` into an array of `Content` models.
// ///
// /// Example JSON `String`:
// /// ```
// /// [
// ///   {
// ///     "title": "Lady and the Tramp",
// ///     "brand": "Disney",
// ///     "availability": ["US", "ES"],
// ///     "availableDate": "2019-09-03T22:00:00Z",
// ///     "popularityScore": 75,
// ///     "contentType": "movie"
// ///   },
// ///   {
// ///     "title": "Wicked Tuna: Man V. Storm",
// ///     "brand": "National Geographic",
// ///     "availability": ["US"],
// ///     "availableDate": "2019-02-01T08:00:00Z",
// ///     "popularityScore": 90,
// ///     "contentType": "series"
// ///   }
// /// ]
// /// ```
// ///
// /// - Parameter contentData: The list of content data as a JSON `String`.
// /// - Returns: An array of `Content` models.
// func convertContentData(_ contentData: String) -> [Content] {
//     guard let data = contentData.data(using: .utf8) else { return [] }
//     let decoder = JSONDecoder()
//     decoder.dateDecodingStrategy = .iso8601
//     guard let content = try? decoder.decode([Content].self, from: data) else { return [] }
//     return content
// }

// /// Converts a preferences object as a JSON `String` into a dictionary of attribute values mapped to preferences.
// ///
// /// Example JSON `String`:
// /// ```
// /// {
// ///   "movie": "love",
// ///   "series": "like",
// ///   "short": "dislike"
// /// }
// /// ```
// ///
// /// - Parameter preferences: The preferences object as a JSON `String`.
// /// - Returns: A dictionary of attribute values mapped to preferences.
// func convertPreferences(_ preferences: String) -> [String: String] {
//     guard let data = preferences.data(using: .utf8) else { return [:] }
//     guard let preferences = try? JSONDecoder().decode([String: String].self, from: data) else { return [:] }
//     return preferences
// }

// // MARK: - Testing

// let contentData = readLine() ?? "[]"
// let brandPreferences = readLine() ?? "{}"
// let contentTypePreferences = readLine() ?? "{}"
// for title in getTopTitles(contentData: contentData,
//                           brandPreferences: brandPreferences,
//                           contentTypePreferences: contentTypePreferences) {
//     print(title)
// }


//----------------------------------------------------------------------------------
//       turned in below:
//----------------------------------------------------------------------------------

// import Foundation

// /// Parses a list of content data, brand preferences, and content type preferences, and returns the top 5 titles by score.
// ///
// /// Titles must be available in the US on or before January 1, 2020.
// ///
// /// - Parameters:
// ///   - contentData: The list of content data as a JSON `String`.
// ///   - brandPreferences: The brand preferences object as a JSON `String`.
// ///   - contentTypePreferences: The content type preferences object as a JSON `String`.
// /// - Returns: The top 5 titles available in the US on or before January 1, 2020, sorted by score (highest to lowest).
// func getTopTitles(contentData: String, brandPreferences: String, contentTypePreferences: String) -> [String] {
//     let content = convertContentData(contentData)
//     let brandPreferences = convertPreferences(brandPreferences)
//     let contentTypePreferences = convertPreferences(contentTypePreferences)
     
//     var topContent: [Content] = []
//     // print(type(of: topContent))
//     // print(type(of: content))
    
//     // _________________________________________________________________________________
//        // TODO: Implement your logic here.
       
//     // // // // please understand, I know that this code is NOT PRETTY(!), (but it works! and I've never seen SWIFT before) // // // // 
    
//     var scoreChangeDict: [String: Int] = [:]
//     scoreChangeDict["dislike"] = -20
//     scoreChangeDict["indifferent"] = 0
//     scoreChangeDict["like"] = 10
//     scoreChangeDict["adore"] = 30
//     scoreChangeDict["love"] = 50
//     // print(scoreChangeDict)

//     var i = 0

//     for solution in content as! [Content] {  //this entire for loop is too long, and I should build helper method for a few things in it
//         // ^^ I don't know if this is the right way to do this...found above "as! [Content]"" in solution on Stack Overflow here:
//         // https://stackoverflow.com/questions/27218669/swift-dictionary-get-key-for-value/41386238
        
//         let date1 = solution.availableDate
//         var date2:Date?
        
//         let availableDateBefore = "01/01/2020"
//         let formatter = DateFormatter()
//         formatter.dateFormat = "MM/dd/yyyy"
//         date2 = formatter.date(from: availableDateBefore)

//         if solution.availability.contains("US") && date2! >= date1 {
            
//             let startingScore = solution.popularityScore
            
//             // ----------brand---------------------------------------------------------------- 
//             // print (solution.brand)  //===> Disney
//             var brand: String
//             brand = solution.brand
      
//             var brandPreferenceValueNeeded: String
            
//             if let valueBrandPreferenceKey = brandPreferences[brand] {
//                 brandPreferenceValueNeeded = valueBrandPreferenceKey
//             } else {
//                 brandPreferenceValueNeeded = "indifferent"
//             }
            
//             // ----------contentType----------------------------------------------------------------    
//             var contentType: String
//             contentType = solution.contentType
//             var contentTypeValueNeeded: String
            
//             if let valueContentTypeKey = contentTypePreferences[contentType] {
//                 contentTypeValueNeeded = valueContentTypeKey
//             } else {
//                 contentTypeValueNeeded = "indifferent"
//             }
            
//             // ----------brandPreferenceValue----------------------------------------------------------------
     
//             var brandPreferenceValue: Int
//             brandPreferenceValue = scoreChangeDict[brandPreferenceValueNeeded]!
            
//             // ----------contentTypePreferenceValue----------------------------------------------------------------
    
//             var contentTypePreferenceValue: Int
//             contentTypePreferenceValue = scoreChangeDict[contentTypeValueNeeded]!
//             // print(contentTypePreferenceValue)
            
//             // ----------add 3 values together ----------------------------------------------------------------
//             var overallScore: Int
//             overallScore = startingScore + brandPreferenceValue + contentTypePreferenceValue
            
//             // ----------add data from solution to topContent ----/ was hoping it would allow me to overwrite value of popScore, but it did not ----------------
        
//             let hd = solution
//             topContent.append(hd)
//             topContent[i].popularityScore = overallScore
            
//             i += 1
//         }
//     }
    
//     let newTopContent = topContent.sorted(by: { $0.title < $1.title })
//     topContent = newTopContent.sorted(by: { $0.popularityScore > $1.popularityScore })
    
//     // why doesn't this work below??:
//     // topContent = topContent.sorted(by: { $0.popularityScore == $1.popularityScore ? $0.title < $1.title : $0.popularityScore < $1.popularityScore  }
  
//     // ___________________end of area to add my code_____________________________________________________
//     return topContent.prefix(5).map { content in content.title }
// }

// // Everything below here is provided as is and shouldn't require modification.

// // MARK: - Models

// struct Content: Codable {
//     let title: String
//     let brand: String
//     let availability: [String]
//     let availableDate: Date
//     // had to change popScore to var, otherwise didn't know how to overwrite value
//     var popularityScore: Int
//     let contentType: String
// }

// // MARK: - Helpers

// /// Converts a list of content data as a JSON `String` into an array of `Content` models.
// ///
// /// Example JSON `String`:
// /// ```
// /// [
// ///   {
// ///     "title": "Lady and the Tramp",
// ///     "brand": "Disney",
// ///     "availability": ["US", "ES"],
// ///     "availableDate": "2019-09-03T22:00:00Z",
// ///     "popularityScore": 75,
// ///     "contentType": "movie"
// ///   },
// ///   {
// ///     "title": "Wicked Tuna: Man V. Storm",
// ///     "brand": "National Geographic",
// ///     "availability": ["US"],
// ///     "availableDate": "2019-02-01T08:00:00Z",
// ///     "popularityScore": 90,
// ///     "contentType": "series"
// ///   }
// /// ]
// /// ```
// ///
// /// - Parameter contentData: The list of content data as a JSON `String`.
// /// - Returns: An array of `Content` models.
// func convertContentData(_ contentData: String) -> [Content] {
//     guard let data = contentData.data(using: .utf8) else { return [] }
//     let decoder = JSONDecoder()
//     decoder.dateDecodingStrategy = .iso8601
//     guard let content = try? decoder.decode([Content].self, from: data) else { return [] }
//     return content
// }

// /// Converts a preferences object as a JSON `String` into a dictionary of attribute values mapped to preferences.
// ///
// /// Example JSON `String`:
// /// ```
// /// {
// ///   "movie": "love",
// ///   "series": "like",
// ///   "short": "dislike"
// /// }
// /// ```
// ///
// /// - Parameter preferences: The preferences object as a JSON `String`.
// /// - Returns: A dictionary of attribute values mapped to preferences.
// func convertPreferences(_ preferences: String) -> [String: String] {
//     guard let data = preferences.data(using: .utf8) else { return [:] }
//     guard let preferences = try? JSONDecoder().decode([String: String].self, from: data) else { return [:] }
//     return preferences
// }

// // MARK: - Testing

// let contentData = readLine() ?? "[]"
// let brandPreferences = readLine() ?? "{}"
// let contentTypePreferences = readLine() ?? "{}"
// for title in getTopTitles(contentData: contentData,
//                           brandPreferences: brandPreferences,
//                           contentTypePreferences: contentTypePreferences) {
//     print(title)
// }