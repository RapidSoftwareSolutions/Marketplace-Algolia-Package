# Algolia Package
The Algolia API includes autocomplete functionality and an instant results display.
* Domain: algolia.com
* Credentials: apiKey, appId

## How to get credentials: 
0. Item one 
1. Item two 

## Algolia.getLogs
Return last logs.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Algolia Application Key.
| appId | credentials| Algolia Application ID.
| offset| Number     | Specify the first entry to retrieve (0-based, 0 is the most recent log entry). Defaults to 0.
| length| Number     | Specify the maximum number of entries to retrieve starting at offset. Defaults to 10. Maximum allowed value: 1000.
| type  | String     | Specify the type of logs to retrieve. This parameter is useful for debugging, especially when it is difficult to locate errors among many API calls:`all` (default): Retrieve all logs; `query`: Retrieve only the queries; `build`: Retrieve only the build operations; `error`: Retrieve only the errors

## Algolia.addGlobalApiKey
This method add a new global API key.

| Field                 | Type       | Description
|-----------------------|------------|----------
| apiKey                | credentials| Algolia Application Key.
| appId                 | credentials| Algolia Application ID.
| validity              | Number     | Specify a validity for this key in seconds (the key will automatically be removed after this period of time). Defaults to 0 (no validity limit).
| maxQueriesPerIPPerHour| Number     | Specify the maximum number of API calls allowed from an IP address per hour.
| maxHitsPerQuery       | Number     | Specify the maximum number of hits this API key can retrieve in one call. Defaults to 0 (unlimited). T
| acl                   | JSON       | Contains the list of rights for this key. Here is the complete list of ACL that can be used for a key: `search`, `browse`, `addObject`, `deleteObject`, `deleteIndex`, `settings`, `editSettings`, `analytics`, `listIndexes`
| indexes               | JSON       | Restrict this new API key to specific index names. This option is useful if you want to isolate your development and production environments: you can have one API key targeting all development indices and another one that target all production indices. You can target all indices starting by a prefix or finishing by a suffix with the ‘*’ character (for example “dev_*” matches all indices starting by “dev_” and “*_dev” matches all indices finishing by “_dev”). If the list is empty or not set, the API Key will be valid for all indices.
| referers              | JSON       | Restrict this new API key to specific referers. You can specify a pattern with one or two *. For example, “https://algolia.com/*” matches all referers starting with “https://algolia.com/” and “*algolia.com” matches all referers ending with “.algolia.com”. You can combine both of them to like “*.algolia.com*” to allow the domain algolia.com. Defaults to all referers if empty or blank
| queryParameters       | String     | Force some query parameters to be applied foreach query made with this api key. You can force all query parameters like: “typoTolerance=strict&ignorePlurals=false&filters=rights:public”. The parameters use the url string format.
| description           | String     | Used to identify a key.

## Algolia.updateGlobalApiKey
This method update a global API key.

| Field                 | Type       | Description
|-----------------------|------------|----------
| apiKey                | credentials| Algolia Application Key.
| appId                 | credentials| Algolia Application ID.
| key                   | String     | Key to update
| validity              | Number     | Specify a validity for this key in seconds (the key will automatically be removed after this period of time). Defaults to 0 (no validity limit).
| maxQueriesPerIPPerHour| Number     | Specify the maximum number of API calls allowed from an IP address per hour.
| maxHitsPerQuery       | Number     | Specify the maximum number of hits this API key can retrieve in one call. Defaults to 0 (unlimited).
| acl                   | JSON       | Contains the list of rights for this key. Here is the complete list of ACL that can be used for a key: `search`, `browse`, `addObject`, `deleteObject`, `deleteIndex`, `settings`, `editSettings`, `analytics`, `listIndexes`
| indexes               | JSON       | Restrict this new API key to specific index names. This option is useful if you want to isolate your development and production environments: you can have one API key targeting all development indices and another one that target all production indices. You can target all indices starting by a prefix or finishing by a suffix with the ‘*’ character (for example “dev_*” matches all indices starting by “dev_” and “*_dev” matches all indices finishing by “_dev”). If the list is empty or not set, the API Key will be valid for all indices.
| referers              | JSON       | Restrict this new API key to specific referers. You can specify a pattern with one or two *. For example, “https://algolia.com/*” matches all referers starting with “https://algolia.com/” and “*algolia.com” matches all referers ending with “.algolia.com”. You can combine both of them to like “*.algolia.com*” to allow the domain algolia.com. Defaults to all referers if empty or blank
| queryParameters       | String     | Force some query parameters to be applied foreach query made with this api key. You can force all query parameters like: “typoTolerance=strict&ignorePlurals=false&filters=rights:public”. The parameters use the url string format.
| description           | String     | Used to identify a key.

## Algolia.getGlobalApiKeys
This method Lists global API keys with their rights. These keys have been created with the add global key API.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Algolia Application Key.
| appId | credentials| Algolia Application ID.

## Algolia.getGlobalApiKeyRights
This method returns the rights of a given global API key that has been created with the add global Key API.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Algolia Application Key.
| appId | credentials| Algolia Application ID.
| key   | String     | Key to retrieve.

## Algolia.deleteGlobalApiKey
This method deletes a global API key that has been created with the add global Key API.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Algolia Application Key.
| appId | credentials| Algolia Application ID.
| key   | String     | Key to be deleted

## Algolia.getSingleSynonymsSet
Fetch a single synonyms set, identified by the given `objectId`

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Algolia Application Key.
| appId        | credentials| Algolia Application ID.
| indexName    | String     | Index name to retrieve single synonyms set for
| objectId     | String     | Object ID of synonyms set.

## Algolia.deleteSingleSynonymsSet
Delete a single synonyms set, identified by the given `objectId`

| Field          | Type       | Description
|----------------|------------|----------
| apiKey         | credentials| Algolia Application Key.
| appId          | credentials| Algolia Application ID.
| indexName      | String     | Index name to delete single synonyms set for
| objectId       | String     | Object ID of synonyms set.
| forwardToSlaves| Boolean    | Delete the synonyms set in all slave indices as well

## Algolia.deleteAllSynonyms
Delete all synonyms from the index

| Field          | Type       | Description
|----------------|------------|----------
| apiKey         | credentials| Algolia Application Key.
| appId          | credentials| Algolia Application ID.
| indexName      | String     | Index name to clear synonyms for
| forwardToSlaves| Boolean    | Delete the synonyms set in all slave indices as well

## Algolia.searchSynonyms
Search/browse all synonyms, possibly filtered by type

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Algolia Application Key.
| appId        | credentials| Algolia Application ID.
| indexName    | String     | Index name to search synonyms for
| query        | String     | The query string used to search for specific synonyms. Use an empty string (default) to browse all synonyms.
| type         | String     | Only search within specific types of synonyms. Multiple types can be specified using a comma-separated list. Possible values: `synonym`, `onewaysynonym`, `altcorrection1`, `altcorrection2`, `placeholder`
| page         | String     | The page to fetch (first page is 0).
| hitsPerPage  | String     | The number of synonyms to fetch per page.

## Algolia.createRegularSynonymSet
Create a new regular synonym set

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Algolia Application Key.
| appId         | credentials| Algolia Application ID.
| indexName     | String     | Index name.
| objectId      | String     | Object ID.
| forwardToSlave| Boolean    | Push the new/updated synonyms set to all slave indices
| synonyms      | JSON       | Array of synonym strings

## Algolia.updateRegularSynonymSet
Update a new regular synonym set

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Algolia Application Key.
| appId         | credentials| Algolia Application ID.
| indexName     | String     | Index name.
| objectId      | String     | Object ID.
| forwardToSlave| Boolean    | Push the new/updated synonyms set to all slave indices
| synonyms      | JSON       | Array of synonym strings

## Algolia.createOnwWaySynonymSet
Create a new one-way synonym set

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Algolia Application Key.
| appId         | credentials| Algolia Application ID.
| indexName     | String     | Index name.
| objectId      | String     | Object ID.
| forwardToSlave| Boolean    | Push the new/updated synonyms set to all slave indices
| input         | String     | Let’s take an example. When a user searches for “tablet”, you want them to be able to find iPads and Galaxy Note tablets alike, but you might not want Android tablets to show up when they search for “iPad”. To do this, you would create a one-way synonym record between tablet (as input) and ipad, galaxy note (as synonyms). When the user types in “tablet”, records containing “iPad” and “Galaxy Note” will be returned. However records containing only “tablet” or “Galaxy Note” won’t be returned if he searches for “iPad”.
| synonyms      | JSON       | Array of synonym strings

## Algolia.updateOnwWaySynonymSet
Update a new one-way synonym set

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Algolia Application Key.
| appId         | credentials| Algolia Application ID.
| indexName     | String     | Index name.
| objectId      | String     | Object ID.
| forwardToSlave| Boolean    | Push the new/updated synonyms set to all slave indices
| input         | String     | Let’s take an example. When a user searches for “tablet”, you want them to be able to find iPads and Galaxy Note tablets alike, but you might not want Android tablets to show up when they search for “iPad”. To do this, you would create a one-way synonym record between tablet (as input) and ipad, galaxy note (as synonyms). When the user types in “tablet”, records containing “iPad” and “Galaxy Note” will be returned. However records containing only “tablet” or “Galaxy Note” won’t be returned if he searches for “iPad”.
| synonyms      | JSON       | Array of synonym strings

## Algolia.createAlternativeCorrectionSynonymSet
Create a new alternative correction synonym set

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Algolia Application Key.
| appId         | credentials| Algolia Application ID.
| indexName     | String     | Index name.
| objectId      | String     | Object ID.
| forwardToSlave| Boolean    | Push the new/updated synonyms set to all slave indices
| type          | String     | Valid values: `altcorrection1`, `altcorrection2`, `altcorrection1|altcorrection2`. See README for more info.
| word          | String     | Word to add alternative synonyms collection for
| corrections   | JSON       | Array of corrections strings.

## Algolia.updateAlternativeCorrectionSynonymSet
Update a new alternative correction synonym set

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Algolia Application Key.
| appId         | credentials| Algolia Application ID.
| indexName     | String     | Index name.
| objectId      | String     | Object ID.
| forwardToSlave| Boolean    | Push the new/updated synonyms set to all slave indices
| type          | String     | Valid values: `altcorrection1`, `altcorrection2`, `altcorrection1|altcorrection2`. See README for more info.
| word          | String     | Word to add alternative synonyms collection for
| corrections   | JSON       | Array of corrections strings.

## Algolia.createPlaceholderSynonymSet
Create a new placeholder correction synonym set

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Algolia Application Key.
| appId         | credentials| Algolia Application ID.
| indexName     | String     | Index name.
| objectId      | String     | Object ID.
| forwardToSlave| Boolean    | Push the new/updated synonyms set to all slave indices
| placeholder   | String     | Word to add placeholder collection for
| replacements  | JSON       | Array of replacements strings

## Algolia.updatePlaceholderSynonymSet
Update a new placeholder correction synonym set

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Algolia Application Key.
| appId         | credentials| Algolia Application ID.
| indexName     | String     | Index name.
| objectId      | String     | Object ID.
| forwardToSlave| Boolean    | Push the new/updated synonyms set to all slave indices
| placeholder   | String     | Word to add placeholder collection for
| replacements  | JSON       | Array of replacements strings

## Algolia.addMultipleSynonyms
Use the batch method to send several synonyms objects at once, and to replace a full set of synonyms on a production index.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Algolia Application Key.
| appId        | credentials| Algolia Application ID.
| indexName    | String     | Index name.
| synonyms     | JSON       | JSON Array of synonyms Objects. See README for example.

## Algolia.getIndexes
This command lists all your existing indexes.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Algolia Application Key.
| appId | credentials| Algolia Application ID.

## Algolia.querySingleIndex
Return objects that match the query. See README.

| Field                           | Type       | Description
|---------------------------------|------------|----------
| apiKey                          | credentials| Algolia Application Key.
| appId                           | credentials| Algolia Application ID.
| indexName                       | String     | Inex name to retrieve.
| query                           | String     | The instant-search query string, all words of the query are interpreted as prefixes (for example “John Mc” will match “John Mccamey” and “Johnathan Mccamey”). If no query parameter is set, retrieves all objects.
| queryType                       | String     | Selects how the query words are interpreted: `prefixAll`, `prefixLast`, `prefixNone`
| typoTolerance                   | String     | This setting has four different options: `true` (default), `false`, `min`: keep only results with the lowest number of typo, `strict`: if there is a match without typo, then all results with 2 typos or more will be removed.
| minWordSizefor1Typo             | Number     | The minimum number of characters in a query word to accept one typo in this word. Defaults to 4.
| minWordSizefor2Typos            | Number     | The minimum number of characters in a query word to accept two typos in this word. Defaults to 8.
| allowTyposOnNumericTokens       | String     | If set to false, disable typo-tolerance on numeric tokens (=numbers) in the query word. For example the query `304` will match with `30450`, but not with `40450` that would have been the case with typo-tolerance enabled. Can be very useful on serial numbers and zip codes searches. Defaults to true.
| ignorePlurals                   | Boolean    | If set to true, simple plural forms won’t be considered as typos (for example car/cars will be considered as equal). Defaults to false.
| restrictSearchableAttributes    | String     | List of attributes you want to use for textual search 
| advancedSyntax                  | String     | Enable the advanced query syntax. Defaults to 0 (false).
| analytics                       | Boolean    | If set to false, this query will not be taken into account for the Analytics. Defaults to true.
| analyticsTags                   | String     | Comma-separated string list. If set, tag your query with the specified identifiers. Tags can then be used in the Analytics to analyze a subset of searches only.
| synonyms                        | Boolean    | If set to false, this query will not use synonyms defined in configuration. Defaults to true.
| replaceSynonymsInHighlight      | Boolean    | If set to false, words matched via synonyms expansion will not be replaced by the matched synonym in the highlighted result. Defaults to true.
| optionalWords                   | String     | Specify a list of words that should be considered as optional when found in the query. The list of words is comma separated. This list will be appended to the one defined in your index settings.
| minProximity                    | String     | Configure the precision of the proximity ranking criterion. See README for more info.
| removeWordsIfNoResults          | String     | Configure the way query words are removed when the query doesn’t retrieve any results. See README for more info.
| disableTypoToleranceOnAttributes| String     | List of attributes on which you want to disable typo tolerance
| removeStopWords                 | String     | Boolean or comma-separated string list. See README for more info
| exactOnSingleWordQuery          | String     | This parameter control how the exact ranking criterion is computed when the query contains one word. There is three different values: `none`, `word`, `attribute` (default)
| alternativesAsExact             | String     | Сomma-separated string list. See README for more info.
| page                            | Number     | Pagination parameter used to select the page to retrieve. Page is zero-based and defaults to 0. Thus, to retrieve the 10th page you need to set page=9
| hitsPerPage                     | Number     | Pagination parameter used to select the number of hits per page. Defaults to 20.
| offset                          | Number     | Instead of page/hitsPerPage, you can use offset/length to specify the number of hits you want to retrieve and from which offset you want to start.
| length                          | Number     | Instead of page/hitsPerPage, you can use offset/length to specify the number of hits you want to retrieve and from which offset you want to start.
| attributesToRetrieve            | String     | List of object attributes you want to retrieve (let you minimize the answer size). See README for more info.
| attributesToHighlight           | String     | List of attributes you want to highlight according to the query. Attributes are separated by a comma. See README for more info.
| attributesToSnippet             | String     | List of attributes to snippet alongside the number of words to return. See README for more info.
| getRankingInfo                  | Number     | If set to 1, the result hits will contain ranking information in _rankingInfo attribute.
| highlightPreTag                 | String     | Specify the string that is inserted before the highlighted parts in the query result (defaults to `<em>`).
| highlightPostTag                | String     | Specify the string that is inserted after the highlighted parts in the query result (defaults to `</em>`
| snippetEllipsisText             | String     | String used as an ellipsis indicator when a snippet is truncated (defaults to empty).
| responseFields                  | String     | Comma-separated string list. See README for more info.
| numericFilters                  | String     | The list of numeric filters you want to apply separated by a comma. See README for more info.
| tagFilters                      | String     | Filter the query by a set of tags. You can AND tags by separating them by commas. See README for more info.
| distinct                        | Number     | Enable the distinct feature (disabled by default) if the attributeForDistinct index setting is set. This feature is similar to the SQL “distinct” keyword: when enabled in a query with the distinct=1 parameter, all hits containing a duplicate value for theattributeForDistinct attribute are removed from results. For example, if the chosen attribute is show_name and several hits have the same value for show_name, then only the best one is kept and others are removed.
| facets                          | String     | List of object attributes that you want to use for faceting. Attributes are separated with a comma. See README for more info.
| facetFilters                    | String     | Filter the query by a list of facets. Facets are separated by commas and each facet is encoded as attributeName:value. See README for more info.
| maxValuesPerFacet               | Number     | Limit the number of facet values returned for each facet. For example: maxValuesPerFacet=10 will retrieve max 10 values per facet. Defaults to 100.
| filters                         | String     | Filter the query with numeric, facet or/and tag filters. The syntax is a SQL like syntax, you can use the OR and AND keywords. See README for more info.
| aroundLatLng                    | String     | Search for entries around a given latitude/longitude (specified as two floats separated by a comma. See README for more info.
| aroundRadius                    | String     | Control the radius associated with a aroundLatLng or aroundLatLngViaIP query.
| aroundPrecision                 | String     | Control the precision of a aroundLatLng query. In meter. For example if you set aroundPrecision=100, two objects that are in the range 0-99m will be considered as identical in the ranking for the .variable geo ranking parameter (same for 100-199, 200-299, … ranges).
| minimumAroundRadius             | String     | Define the minimum radius used for aroundLatLng or aroundLatLngViaIP when aroundRadius is not set. The radius is computed automatically using the density of the area. You can retrieve the computed radius in the automaticRadius attribute of the answer.
| insideBoundingBox               | String     | Search for entries inside a given area defined by the two extreme points of a rectangle. See README for more info.
| insidePolygon                   | String     | Search entries inside a given area defined by a set of points (defined by a minimum of 6 floats. See README for more info.

## Algolia.deleteSingleIndex
This method deletes an existing index.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Algolia Application Key.
| appId        | credentials| Algolia Application ID.
| indexName    | String     | Index name to delete.

## Algolia.clearSingleIndex
This method deletes the index content. Settings and index specific API keys are kept untouched.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Algolia Application Key.
| appId        | credentials| Algolia Application ID.
| indexName    | String     | Index name to clear

## Algolia.queryMultipleIndexes
This method allows to query multiple indexes with one API call. See README for info and examples.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Algolia Application Key.
| appId | credentials| Algolia Application ID.
| data  | JSON       | Request data. See README for more info.

## Algolia.addSingleObjectToIndex
This method adds one object in the index with automatic assignation of `objectId`.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Algolia Application Key.
| appId        | credentials| Algolia Application ID.
| indexName    | String     | Index name to add object for.
| objectId     | String     | Index name to add object for.
| object       | JSON       | Object body. See README for more info.

## Algolia.updateSingleObject
This method adds or replaces an object (if the object does not exist, it will be created). Be careful, when an object already exists for the specified object ID, the whole object is replaced: existing attributes that are not replaced are deleted.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Algolia Application Key.
| appId        | credentials| Algolia Application ID.
| indexName    | String     | Index name to add object for.
| objectId     | String     | Index name to add object for.
| object       | JSON       | Object body. See README for more info.

## Algolia.partiallyUpdateObject
/1/indexes/:indexName/:objectId/partial

| Field            | Type       | Description
|------------------|------------|----------
| apiKey           | credentials| Algolia Application Key.
| appId            | credentials| Algolia Application ID.
| indexName        | String     | Index name to add object for.
| objectId         | String     | Index name to add object for.
| object           | JSON       | Object body. See README for more info.
| createIfNotExists| Boolean    | You can avoid an automatic creation of the object. Defaults is `true`

## Algolia.getSingleObject
This method returns one object from the index.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Algolia Application Key.
| appId        | credentials| Algolia Application ID.
| indexName    | String     | Index name to add object for.
| objectId     | String     | Index name to add object for.

## Algolia.getObjects
This method allows to retrieve several objects with one API call.

| Field       | Type       | Description
|-------------|------------|----------
| apiKey      | credentials| Algolia Application Key.
| appId       | credentials| Algolia Application ID.
| requests    | JSON       | JSON Array of Objects. See README for more info.

## Algolia.deleteSingleObject
This method deletes an existing object from the index

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Algolia Application Key.
| appId        | credentials| Algolia Application ID.
| indexName    | String     | Index name to delete.
| objectId     | String     | Index name to delete.

## Algolia.getIndexSettings
This method retrieve index settings.

| Field                           | Type       | Description
|---------------------------------|------------|----------
| apiKey                          | credentials| Algolia Application Key.
| appId                           | credentials| Algolia Application ID.
| indexName                       | String     | Index name to retrieve settings for.
| attributesToIndex               | JSON       | JSON Array of Strings. The list of fields you want to index. If set to null, all textual attributes of your objects are indexed, but you should update it to get optimal results. See README for more info.
| numericAttributesToIndex        | String     | All numerical attributes are automatically indexed as numerical filters. If you don’t need filtering on some of your numerical attributes, please consider sending them as strings to speed up the indexing. If you only need to filter on a numeric value with the operator = or !=, you can speed up the indexing by specifying the attribute with equalOnly(AttributeName). The other operators will be disabled.
| attributesForFaceting           | JSON       | The list of fields you want to use for faceting. All strings in the attribute selected for faceting are extracted and added as a facet. By default, no attribute is used for faceting.
| attributeForDistinct            | String     | The attribute name used for the Distinct feature. This feature is similar to the SQL “distinct” keyword: when enabled in query with the distinct=1 parameter, all hits containing a duplicate value for this attribute are removed from results. For example, if the chosen attribute is show_name and several hits have the same value for show_name, then only the best one is kept and others are removed.
| ranking                         | JSON       | JSON Array of Strings. Controls the way results are sorted. See README for more info.
| customRanking                   | JSON       | JSON Array of Strings. Lets you specify part of the ranking. The syntax of this condition is an array of strings containing attributes prefixed by asc (ascending order) or desc (descending order) operator. For example: `customRanking`: [`desc(population)`, `asc(name)`]
| separatorsToIndex               | String     | Specify the separators (punctuation characters) to index. By default, separators are not indexed. Use `+#` to be able to search Google+ or C#.
| slaves                          | String     | JSON Array of String. The list of indexes on which you want to replicate all write operations. In order to get response times in milliseconds, we pre-compute part of the ranking during indexing. If you want to use different ranking configurations depending of the use-case, you need to create one index per ranking configuration. This option enables you to perform write operations only on this index, and to automatically update slave indexes with the same operations.
| unretrievableAttributes         | String     | JSON Array Of Strings. List of attributes that cannot be retrieved at query time. This feature allows you to have an attribute that is used for indexing and/or ranking but which cannot be retrieved. This setting will be bypassed if the query is done with the ADMIN API key. Defaults to null.
| allowCompressionOfIntegerArray  | Boolean    | Allows compression of big integer arrays. We recommended to store the list of user ID or rights as an integer array and enable this setting. When enabled the integer array are reordered to reach a better compression ratio. Defaults to false.
| synonyms                        | JSON       | JSON Array Of Strings. An array of array of string considered as equal. See README for more info
| placeholders                    | JSON       | JSON Hash. This is an advanced use case to define a token substitutable by a list of words without having the original token searchable. See README for more info.
| altCorrections                  | JSON       | Specify alternative corrections that you want to consider. See README for more info.
| disableTypoToleranceOnWords     | JSON       | JSON Array of String. Specify a list of words on which the automatic typo tolerance will be disabled.
| disableTypoToleranceOnAttributes| JSON       | JSON Array of Strings. List of attributes on which you want to disable typo tolerance (must be a subset of the attributesToIndex index setting). By default the list is empty.
| disablePrefixOnAttributes       | JSON       | JSON Array of Strings. List of attributes on which you want to disable typo tolerance (must be a subset of the attributesToIndex index setting). By default the list is empty.
| disableExactOnAttributes        | JSON       | JSON Array of String. List of attributes on which you want to disable the computation of “exact” criteria (must be a subset of the attributesToIndex index setting). By default the list is empty.
| minWordSizefor1Typo             | Number     | The minimum number of characters to accept one typo (default = 4).
| minWordSizefor2Typos            | Number     | The minimum number of characters to accept two typos (default = 8).
| hitsPerPage                     | Number     | The number of hits per page (default = 10).
| attributesToRetrieve            | JSON       | JSON Array of String. Default list of attributes to retrieve in objects. If set to null, all attributes are retrieved.
| attributesToHighlight           | JSON       | JSON Array of String. Default list of attributes to highlight. If set to null, all indexed attributes are highlighted.
| attributesToSnippet             | JSON       | JSON Array of Strings. Default list of attributes to snippet alongside the number of words to return (syntax is ‘attributeName:nbWords’). If set to null, no snippet is computed.
| queryType                       | String     | Select how the query words are interpreted, it can be one of the following value: `prefixAll`, `prefixLast`, `prefixNone`.
| minProximity                    | Number     | Configure the precision of the proximity ranking criterion. See README for more info.
| highlightPreTag                 | String     | Specify the string that is inserted before the highlighted parts in the query result (defaults to `&lt;em&gt;`).
| highlightPostTag                | String     | Specify the string that is inserted after the highlighted parts in the query result (defaults to `&lt;/em&gt;`).
| optionalWords                   | JSON       | JSON Array of Strings. Specify a list of words that should be considered as optional when found in the query
| allowTyposOnNumericTokens       | Boolean    | If set to false, disable typo-tolerance on numeric tokens (=numbers) in the query word. For example the query `304` will match with `30450`, but not with `40450` that would have been the case with typo-tolerance enabled. Can be very useful on serial numbers and zip codes searches. Defaults to false.
| ignorePlurals                   | Boolean    | If set to true, simple plural forms won’t be considered as typos (for example car/cars will be considered as equal). Defaults to false.
| advancedSyntax                  | Boolean    | Enable the advanced query syntax. Defaults to 0 (false). See README for more info.
| replaceSynonymsInHighlight      | Boolean    | If set to false, words matched via synonyms expansion will not be replaced by the matched synonym in the highlighted result. Defaults to true.
| maxValuesPerFacet               | Number     | Limit the number of facet values returned for each facet. For example: maxValuesPerFacet=10 will retrieve max 10 values per facet. Defaults to 100.
| distinct                        | Number     | Enable the distinct feature (disabled by default) if the attributeForDistinct index setting is set. This feature is similar to the SQL “distinct” keyword: when enabled in a query with the distinct=1 parameter, all hits containing a duplicate value for theattributeForDistinct attribute are removed from results. For example, if the chosen attribute is show_name and several hits have the same value for show_name, then only the best one is kept and others are removed.
| typoTolerance                   | String     | This setting has four different options: `true`, `false`, `min`, `strict`.
| removeStopWords                 | String     | Remove stop words from query before executing it. It can be a boolean: enable or disable all 41 supported languages or a string array with the list of languages you have in your record (using language iso code). See README for more info.
| snippetEllipsisText             | String     | String used as an ellipsis indicator when a snippet is truncated. Default: `…` (U+2026 HORIZONTAL ELLIPSIS).
| exactOnSingleWordQuery          | String     | This parameter control how the exact ranking criterion is computed when the query contains one word. There is three different values: `none`, `word`, `attribute`.
| alternativesAsExact             | String     | Specify the list of approximation that should be considered as an exact match in the ranking formula. See README for more info.

## Algolia.getIndexContent
This method allows you to retrieve all index content (for backup, SEO or analytics purpose). It can retrieve up to 1,000 records per call and supports full text search and filters.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Algolia Application Key.
| appId        | credentials| Algolia Application ID.
| indexName    | String     | Index name to retrieve content for.

## Algolia.changeIndexSettings
This method updates part of index settings, the list of attributes and their behavior are listed in the get index settings API.

| Field                           | Type       | Description
|---------------------------------|------------|----------
| apiKey                          | credentials| Algolia Application Key.
| appId                           | credentials| Algolia Application ID.
| indexName                       | String     | Index name to retrieve settings for.
| forwardToSlaves                 | Boolean    | If this parameter is true, the change is also applied on slaves of this index.
| attributesToIndex               | JSON       | JSON Array of Strings. The list of fields you want to index. If set to null, all textual attributes of your objects are indexed, but you should update it to get optimal results. See README for more info.
| numericAttributesToIndex        | String     | All numerical attributes are automatically indexed as numerical filters. If you don’t need filtering on some of your numerical attributes, please consider sending them as strings to speed up the indexing. If you only need to filter on a numeric value with the operator = or !=, you can speed up the indexing by specifying the attribute with equalOnly(AttributeName). The other operators will be disabled.
| attributesForFaceting           | JSON       | The list of fields you want to use for faceting. All strings in the attribute selected for faceting are extracted and added as a facet. By default, no attribute is used for faceting.
| attributeForDistinct            | String     | The attribute name used for the Distinct feature. This feature is similar to the SQL “distinct” keyword: when enabled in query with the distinct=1 parameter, all hits containing a duplicate value for this attribute are removed from results. For example, if the chosen attribute is show_name and several hits have the same value for show_name, then only the best one is kept and others are removed.
| ranking                         | JSON       | JSON Array of Strings. Controls the way results are sorted. See README for more info.
| customRanking                   | JSON       | JSON Array of Strings. Lets you specify part of the ranking. The syntax of this condition is an array of strings containing attributes prefixed by asc (ascending order) or desc (descending order) operator. For example: `customRanking`: [`desc(population)`, `asc(name)`]
| separatorsToIndex               | String     | Specify the separators (punctuation characters) to index. By default, separators are not indexed. Use `+#` to be able to search Google+ or C#.
| slaves                          | String     | JSON Array of String. The list of indexes on which you want to replicate all write operations. In order to get response times in milliseconds, we pre-compute part of the ranking during indexing. If you want to use different ranking configurations depending of the use-case, you need to create one index per ranking configuration. This option enables you to perform write operations only on this index, and to automatically update slave indexes with the same operations.
| unretrievableAttributes         | String     | JSON Array Of Strings. List of attributes that cannot be retrieved at query time. This feature allows you to have an attribute that is used for indexing and/or ranking but which cannot be retrieved. This setting will be bypassed if the query is done with the ADMIN API key. Defaults to null.
| allowCompressionOfIntegerArray  | Boolean    | Allows compression of big integer arrays. We recommended to store the list of user ID or rights as an integer array and enable this setting. When enabled the integer array are reordered to reach a better compression ratio. Defaults to false.
| synonyms                        | JSON       | JSON Array Of Strings. An array of array of string considered as equal. See README for more info
| placeholders                    | JSON       | JSON Hash. This is an advanced use case to define a token substitutable by a list of words without having the original token searchable. See README for more info.
| altCorrections                  | JSON       | Specify alternative corrections that you want to consider. See README for more info.
| disableTypoToleranceOnWords     | JSON       | JSON Array of String. Specify a list of words on which the automatic typo tolerance will be disabled.
| disableTypoToleranceOnAttributes| JSON       | JSON Array of Strings. List of attributes on which you want to disable typo tolerance (must be a subset of the attributesToIndex index setting). By default the list is empty.
| disablePrefixOnAttributes       | JSON       | JSON Array of Strings. List of attributes on which you want to disable typo tolerance (must be a subset of the attributesToIndex index setting). By default the list is empty.
| disableExactOnAttributes        | JSON       | JSON Array of String. List of attributes on which you want to disable the computation of “exact” criteria (must be a subset of the attributesToIndex index setting). By default the list is empty.
| minWordSizefor1Typo             | Number     | The minimum number of characters to accept one typo (default = 4).
| minWordSizefor2Typos            | Number     | The minimum number of characters to accept two typos (default = 8).
| hitsPerPage                     | Number     | The number of hits per page (default = 10).
| attributesToRetrieve            | JSON       | JSON Array of String. Default list of attributes to retrieve in objects. If set to null, all attributes are retrieved.
| attributesToHighlight           | JSON       | JSON Array of String. Default list of attributes to highlight. If set to null, all indexed attributes are highlighted.
| attributesToSnippet             | JSON       | JSON Array of Strings. Default list of attributes to snippet alongside the number of words to return (syntax is ‘attributeName:nbWords’). If set to null, no snippet is computed.
| queryType                       | String     | Select how the query words are interpreted, it can be one of the following value: `prefixAll`, `prefixLast`, `prefixNone`.
| minProximity                    | Number     | Configure the precision of the proximity ranking criterion. See README for more info.
| highlightPreTag                 | String     | Specify the string that is inserted before the highlighted parts in the query result (defaults to `&lt;em&gt;`).
| highlightPostTag                | String     | Specify the string that is inserted after the highlighted parts in the query result (defaults to `&lt;/em&gt;`).
| optionalWords                   | JSON       | JSON Array of Strings. Specify a list of words that should be considered as optional when found in the query
| allowTyposOnNumericTokens       | Boolean    | If set to false, disable typo-tolerance on numeric tokens (=numbers) in the query word. For example the query `304` will match with `30450`, but not with `40450` that would have been the case with typo-tolerance enabled. Can be very useful on serial numbers and zip codes searches. Defaults to false.
| ignorePlurals                   | Boolean    | If set to true, simple plural forms won’t be considered as typos (for example car/cars will be considered as equal). Defaults to false.
| advancedSyntax                  | Boolean    | Enable the advanced query syntax. Defaults to 0 (false). See README for more info.
| replaceSynonymsInHighlight      | Boolean    | If set to false, words matched via synonyms expansion will not be replaced by the matched synonym in the highlighted result. Defaults to true.
| maxValuesPerFacet               | Number     | Limit the number of facet values returned for each facet. For example: maxValuesPerFacet=10 will retrieve max 10 values per facet. Defaults to 100.
| distinct                        | Number     | Enable the distinct feature (disabled by default) if the attributeForDistinct index setting is set. This feature is similar to the SQL “distinct” keyword: when enabled in a query with the distinct=1 parameter, all hits containing a duplicate value for theattributeForDistinct attribute are removed from results. For example, if the chosen attribute is show_name and several hits have the same value for show_name, then only the best one is kept and others are removed.
| typoTolerance                   | String     | This setting has four different options: `true`, `false`, `min`, `strict`.
| removeStopWords                 | String     | Remove stop words from query before executing it. It can be a boolean: enable or disable all 41 supported languages or a string array with the list of languages you have in your record (using language iso code). See README for more info.
| snippetEllipsisText             | String     | String used as an ellipsis indicator when a snippet is truncated. Default: `…` (U+2026 HORIZONTAL ELLIPSIS).
| exactOnSingleWordQuery          | String     | This parameter control how the exact ranking criterion is computed when the query contains one word. There is three different values: `none`, `word`, `attribute`.
| alternativesAsExact             | String     | Specify the list of approximation that should be considered as an exact match in the ranking formula. See README for more info.

## Algolia.copySingleIndex
This method copy an existing index. If the destination index already exists, its specific API keys will be preserved and the source index specific API keys will be added.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Algolia Application Key.
| appId        | credentials| Algolia Application ID.
| indexName    | String     | Index name to move
| destination  | String     | Specify the name of the destination index

## Algolia.moveSingleIndex
This method move an existing index. If the destination index already exists, its specific API keys will be preserved and the source index specific API keys will be added.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Algolia Application Key.
| appId        | credentials| Algolia Application ID.
| indexName    | String     | Index name to move
| destination  | String     | Specify the name of the destination index

## Algolia.getTaskStatus
This method gets the status of a given task (published or notPublished). Returns also a pendingTask flag that indicates if the index has remaining task(s) running.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Algolia Application Key.
| appId        | credentials| Algolia Application ID.
| indexName    | String     | Index name.
| task         | String     | Task to retrieve status for.

## Algolia.addIndexSpecificApiKey
This method add a new key that can access to this index.

| Field          | Type       | Description
|----------------|------------|----------
| apiKey         | credentials| Algolia Application Key.
| appId          | credentials| Algolia Application ID.
| indexName      | String     | Used to identify a key.
| description    | String     | Used to identify a key.
| acl            | JSON       | JSON Array of Strings. Contains the list of rights for this key. Here is the complete list of ACL that can be used for a key: `search`, `browse`, `addObject`, `deleteObject`, `deleteIndex`, `settings`, `editSettings`, `analytics`, `listIndexes`. See README for more info.
| referers       | JSON       | JSON Array of String. Restrict this new API key to specific referers. You can specify a pattern with one or two *. For example, “https://algolia.com/*” matches all referers starting with “https://algolia.com/” and “*.algolia.com” matches all referers ending with “.algolia.com”. You can combine both of them to like “*algolia.com*” to allow the domain algolia.com. Defaults to all referers if empty or blank
| queryParameters| String     | Force some query parameters to be applied foreach query made with this api key. You can force all query parameters like: “typoTolerance=strict&ignorePlurals=false&filters=rights:public”. The parameters use the url string format.
| validity       | Number     | Specify a validity for this key in seconds (the key will automatically be removed after this period of time). Defaults to 0 (no validity limit).
| maxHitsPerQuery| Number     | Specify the maximum number of hits this API key can retrieve in one call. Defaults to 0 (unlimited). This parameter can be used to protect you from attempts at retrieving your entire content by massively querying the index.

## Algolia.updateIndexSpecificApiKey
This method update a key that can access to this index.

| Field          | Type       | Description
|----------------|------------|----------
| apiKey         | credentials| Algolia Application Key.
| appId          | credentials| Algolia Application ID.
| key            | String     | Key to update
| indexName      | String     | Used to identify a key.
| description    | String     | Used to identify a key.
| acl            | JSON       | JSON Array of Strings. Contains the list of rights for this key. Here is the complete list of ACL that can be used for a key: `search`, `browse`, `addObject`, `deleteObject`, `deleteIndex`, `settings`, `editSettings`, `analytics`, `listIndexes`. See README for more info.
| referers       | JSON       | JSON Array of String. Restrict this new API key to specific referers. You can specify a pattern with one or two *. For example, “https://algolia.com/*” matches all referers starting with “https://algolia.com/” and “*.algolia.com” matches all referers ending with “.algolia.com”. You can combine both of them to like “*algolia.com*” to allow the domain algolia.com. Defaults to all referers if empty or blank
| queryParameters| String     | Force some query parameters to be applied foreach query made with this api key. You can force all query parameters like: “typoTolerance=strict&ignorePlurals=false&filters=rights:public”. The parameters use the url string format.
| validity       | Number     | Specify a validity for this key in seconds (the key will automatically be removed after this period of time). Defaults to 0 (no validity limit).
| maxHitsPerQuery| Number     | Specify the maximum number of hits this API key can retrieve in one call. Defaults to 0 (unlimited). This parameter can be used to protect you from attempts at retrieving your entire content by massively querying the index.

## Algolia.getIndexSpecificApiKeys
This method Lists API keys that have access to this index with their rights. These keys have been created with the add index specific key API.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Algolia Application Key.
| appId        | credentials| Algolia Application ID.
| indexName    | String     | Index Name to list keys for.

## Algolia.getIndexApiKeysForAllIndexes
This method update a key that can access to this index.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Algolia Application Key.
| appId | credentials| Algolia Application ID.

## Algolia.getIndexSpecificApiKeyRights
This method returns the rights of a given index specific API key that has been created with the add index specific key API.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Algolia Application Key.
| appId        | credentials| Algolia Application ID.
| indexName    | String     | Index name.
| key          | String     | Key to retrieve.

## Algolia.deleteIndexSpecificApiKey
This method delete an index specific API key that have been created with the add index specific key API.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Algolia Application Key.
| appId        | credentials| Algolia Application ID.
| indexName    | String     | Index name.
| key          | String     | Key to delete.

## Algolia.searchFacetValues
This method searches for values of a given facet, optionally restricting the returned values to those contained in objects matching other search criteria.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Algolia Application Key.
| appId        | credentials| Algolia Application ID.
| indexName    | String     | Index Name
| facetName    | String     | Facet Name
| params       | JSON       | You must specify at least the facetQuery parameter, which contains the text that will be searched inside the facet’s values. You may also specify any number of other regular search parameters. They will apply to objects in the index. See README for more info.

