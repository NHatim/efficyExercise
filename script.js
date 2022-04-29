const oppoStatus = [
    {
      "K_OPPO_STATUS": 1,
      "STATUS": "1. Initial Contact",
      "SUCCESS": 0
    },
    {
      "K_OPPO_STATUS": 2,
      "STATUS": "2. Demonstration",
      "SUCCESS": 25
    },
    {
      "K_OPPO_STATUS": 3,
      "STATUS": "3. Proposal",
      "SUCCESS": 50
    },
    {
      "K_OPPO_STATUS": 4,
      "STATUS": "4. Negotiation",
      "SUCCESS": 75
    },
    {
      "K_OPPO_STATUS": 5,
      "STATUS": "5. Order",
      "SUCCESS": 100
    }
  ];
  
  const Module = class {
    constructor() {
  
    }
  start() {
      // Start modifying the form elements here!
      // You are allowed to add extra methods and properties to this class
      const selectStatus = document.querySelector('.status');
      const selectSuccess = document.querySelector('.success');
      selectSuccess.style.fontFamily = 'monospace';
      selectSuccess.style.textAlign = 'right';
      oppoStatus.forEach((element) => {
        let createSelect = document.createElement('select');
        createSelect.innerText = element.STATUS;
        createSelect.value = element.K_OPPO_STATUS;
        createSelect.classList.add('status');
        selectStatus.appendChild(createSelect);
      });
  
      selectStatus.addEventListener('change', (e) => {
        const status = e.target.value;
        const successValue = oppoStatus.filter(
          (element) => element.K_OPPO_STATUS == status
        )[0].SUCCESS;
        selectSuccess.value = successValue;
      });
    }
  }
  
  const main = new Module();
  main.start();