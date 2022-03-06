/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      orders {
        items {
          createdAt
          id
          originLatitude
          originLongitude
          destLatitude
          destLongitude
          type
          carID
          userID
          updatedAt
        }
        nextToken
      }
      car {
        id
        type
        latitude
        longitude
        heading
        orders {
          nextToken
        }
        isActive
        status
        userID
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      orders {
        items {
          createdAt
          id
          originLatitude
          originLongitude
          destLatitude
          destLongitude
          type
          carID
          userID
          updatedAt
        }
        nextToken
      }
      car {
        id
        type
        latitude
        longitude
        heading
        orders {
          nextToken
        }
        isActive
        status
        userID
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      email
      orders {
        items {
          createdAt
          id
          originLatitude
          originLongitude
          destLatitude
          destLongitude
          type
          carID
          userID
          updatedAt
        }
        nextToken
      }
      car {
        id
        type
        latitude
        longitude
        heading
        orders {
          nextToken
        }
        isActive
        status
        userID
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar {
    onCreateCar {
      id
      type
      latitude
      longitude
      heading
      orders {
        items {
          createdAt
          id
          originLatitude
          originLongitude
          destLatitude
          destLongitude
          type
          carID
          userID
          updatedAt
        }
        nextToken
      }
      isActive
      status
      userID
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          status
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar {
    onUpdateCar {
      id
      type
      latitude
      longitude
      heading
      orders {
        items {
          createdAt
          id
          originLatitude
          originLongitude
          destLatitude
          destLongitude
          type
          carID
          userID
          updatedAt
        }
        nextToken
      }
      isActive
      status
      userID
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          status
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar {
    onDeleteCar {
      id
      type
      latitude
      longitude
      heading
      orders {
        items {
          createdAt
          id
          originLatitude
          originLongitude
          destLatitude
          destLongitude
          type
          carID
          userID
          updatedAt
        }
        nextToken
      }
      isActive
      status
      userID
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          status
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      createdAt
      id
      originLatitude
      originLongitude
      destLatitude
      destLongitude
      type
      carID
      userID
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          status
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      car {
        id
        type
        latitude
        longitude
        heading
        orders {
          nextToken
        }
        isActive
        status
        userID
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      createdAt
      id
      originLatitude
      originLongitude
      destLatitude
      destLongitude
      type
      carID
      userID
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          status
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      car {
        id
        type
        latitude
        longitude
        heading
        orders {
          nextToken
        }
        isActive
        status
        userID
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      createdAt
      id
      originLatitude
      originLongitude
      destLatitude
      destLongitude
      type
      carID
      userID
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          status
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      car {
        id
        type
        latitude
        longitude
        heading
        orders {
          nextToken
        }
        isActive
        status
        userID
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
