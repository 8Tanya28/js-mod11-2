// Завдання 2
// Перепиши функцію toggleUserState() так, щоб вона не використовувала
// callback-функцію callback, а приймала всього два параметри allUsers
//  і userName і повертала проміс.
// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];
// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );
//   callback(updatedUsers);
// };
// const logger = updatedUsers => console.table(updatedUsers);
// // Зараз працює так
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);
// // Повинно працювати так
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];
// console.table(users);
const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const updatedUsers = allUsers.map((user) =>
        user.name === userName ? { ...user, active: !user.active } : user
      );
      resolve(updatedUsers);
    }, 1000);
  });
};
const logger = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);
