import styles from './App.module.css'
import Container from './components/Container'
import Header from './components/partials/Header'

// Features
import Balance from './features/Balance'

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <div className={styles.grid}>
            <Balance className={styles.blockBalance} />
            {/* <Balance className={styles.blockAnalytics} /> */}
            {/* <Balance className={styles.blockCashOut} /> */}
          </div>
        </Container>
      </main>
    </>
  )
}

export default App
