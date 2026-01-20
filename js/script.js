/* ================================
   SELEÇÃO DE ELEMENTOS (DOM)
=================================== */

const form = document.getElementById('convert-form');
const amountInput = document.getElementById('amount');

const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');

const swapButton = document.getElementById('swap-button');
const resultDiv = document.getElementById('result');

const themeToggle = document.getElementById('theme-toggle');

/* ================================
   TAXAS DE CÂMBIO (BASE)
=================================== */

const exchangeRates = {
    'USD': 1.0,        // Dólar Americano
    'EUR': 0.85,       // Euro
    'GBP': 0.75,       // Libra Esterlina
    'JPY': 110.0,      // Iene Japonês
    'BRL': 5.25,       // Real Brasileiro
    'ARS': 98.0,       // Peso Argentino
    'CAD': 1.25,       // Dólar Canadense
    'AUD': 1.35,       // Dólar Australiano
    'AOA': 650.0       // Kwanza Angolano
};

/* FUNÇÃO DE CONVERSÃO */
function convertCurrency(amount, from, to) {
    const amountInUSD = amount / exchangeRates[from];
    const convertedAmount = amountInUSD * exchangeRates[to];
    return convertedAmount.toFixed(2);
}

/* EVENTO DE CONVERSÃO  */

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const amount = Number(amountInput.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (!amount || amount <= 0) {
    resultDiv.textContent = 'Informe um valor válido.';
    return;
  }

  const result = convertCurrency(amount, from, to);

  resultDiv.textContent = `${amount} ${from} = ${result} ${to}`;
});

/* TROCA DE MOEDAS  */

swapButton.addEventListener('click', () => {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
});

/* TOGGLE DE TEMA */

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});
