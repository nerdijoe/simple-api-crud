# Simple API CRUD

## Description
Simple API CRUD for Foods and Restaurant


## Models
### Foods

| Field         | Data type     |
| --------------|:-------------:|
| name          | String        |
| price         | Number        |
| expired_date  | Date          |

### Restaurants

| Field         | Data type     |
| --------------|:-------------:|
| name          | String        |
| owner         | String        |
| address       | String        |
| open_status   | Boolean       |

## Usage
Use postman to perform the CRUD actions

##### Examples:
 Get list of all food
```
localhost:3000/foods/
```
Get a specific food
```
localhost:3000/foods/[id]
```
