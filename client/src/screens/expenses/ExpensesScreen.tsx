// import React from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import BudgetCard from '../../components/ui/expenses/BudgetCard';
// import CategoryCard from '../../components/ui/expenses/CategoryCard';
// import TransactionItem from '../../components/ui/expenses/TransactionItem';
// import { categories, transactions } from '../../constants/expensesData';
// import ExpenseHeader from '../../components/ui/expenses/ExpenseHeader';

// export default function ExpensesScreen() {
//   return (
//     <FlatList
//       ListHeaderComponent={
//         <View style={styles.header}>
//           <BudgetCard />

//           <Text style={styles.sectionTitle}>Categories</Text>
//           <FlatList
//             data={categories}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             renderItem={({ item }) => <CategoryCard item={item} />}
//             keyExtractor={(item) => item.id}
//           />

//           <Text style={styles.sectionTitle}>Recent Transactions</Text>
//         </View>
//       }
//       data={transactions}
//       renderItem={({ item }) => <TransactionItem item={item} />}
//       keyExtractor={(item) => item.id}
//       contentContainerStyle={styles.container}
//       showsVerticalScrollIndicator={false}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     paddingBottom: 30,
//     backgroundColor: '#F5F7FA',
//   },
//   header: {
//     marginBottom: 8,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 16,
//   },
// });



import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import ExpenseHeader from '../../components/ui/expenses/ExpenseHeader';
import BudgetCard from '../../components/ui/expenses/BudgetCard';
import CategoryCard from '../../components/ui/expenses/CategoryCard';
import TransactionItem from '../../components/ui/expenses/TransactionItem';

import { categories, transactions } from '../../constants/expensesData';
import RecordButton from '../../components/ui/diary/RecordButton';
import AddExpenseButton from '../../components/ui/expenses/AddExpenseButton';
import AddExpenseSheet from '../../components/ui/expenses/AddExpenseSheet';

export default function ExpensesScreen() {

    const [showSheet, setShowSheet] = useState(false);

  return (
    <View style={styles.screen}>
      {/* 🔹 Top Header */}
      <ExpenseHeader />

      {/* 🔹 Main Vertical List */}
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <TransactionItem item={item} />}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <>
            {/* 🔹 Budget Card */}
            <BudgetCard />

            {/* 🔹 Categories */}
            <Text style={styles.sectionTitle}>Categories</Text>
            <FlatList
              data={categories}
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <CategoryCard item={item} />}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryList}
            />

            {/* 🔹 Transactions title */}
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
          </>
        }
      />

             <AddExpenseButton onPress={() => setShowSheet(true)} />

      <AddExpenseSheet
        visible={showSheet}
        onClose={() => setShowSheet(false)}
      />

      <RecordButton />
    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginTop: 24,
    marginBottom: 12,
  },
  categoryList: {
    paddingVertical: 4,
  },
});
