
# React Native Ecommerce

A simple eCommerce platform designed using React Native, React Redux, and more to handle simple orders, carts, and more.
Additionally, it will handle the order status and incorporate a chatbot for easy problem-solving.
## Acknowledgements

 - [Ecommerce API](https://github.com/BestBuy/api-playground)
## API Reference

#### Get all items

```http
  GET /products
```

| Curl |
| :-------- |
| curl -X GET --header 'Accept: application/json' 'http://localhost:3030/products' |

#### Get item

```http
  GET /products/{id}
```
| Curl |
| :-------- |
| curl -X GET --header 'Accept: application/json' 'http://localhost:3030/products/1' |


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Other APIs

Refer Acknowledgement link for more.

  
## Authors

- [@suruchikaursihra](https://www.github.com/suruchikaursihra)

  
## Documentation

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Theme](https://akveo.github.io/react-native-ui-kitten/)
## Feedback

If you have any feedback, please reach out to us at suruchikaursihra@gmail.com

  
## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
**New to React Native ?**
 - [React Native Setup](https://reactnative.dev/docs/environment-setup)
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server for **Android**

```bash
  npx react-native run-ios run-android
```

Start the server for **IOS**

```bash
  npx react-native run-ios
```
## Appendix

There is no use of Expo for this project.
## Tech Stack

**Client:** React Native, Redux, Css

**Server:** Node, Express

  
