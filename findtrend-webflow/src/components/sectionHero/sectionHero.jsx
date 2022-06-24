import React from 'react'
import './style.css'
import tab4 from '../../assets/img/tab4.png'
import tab3 from '../../assets/img/tab3.png'
import tab2 from '../../assets/img/tab2.png'
import tab1 from '../../assets/img/tab1.png'

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <h1>
          Minimize your tabs. <br />
          Find the trends!
        </h1>
        <p>
          Don’t let your computer memories consumes all of those browser tabs.
          <br />
          Findtrend let you gathers all of your favorite website into one place.
        </p>
        <div class="button-hero">
          <button class="started-btn">Get Started 🔥</button>
          <svg
            width="100"
            height="70"
            viewBox="0 0 100 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2_304)">
              <path
                d="M40.9312 42.422C41.3813 44.0722 40.659 45.3427 39.8416 46.4267C38.6846 47.9196 37.3551 49.3047 35.9306 50.5034C29.2238 55.8535 21.476 57.8576 13.0029 56.9813C10.8494 56.7508 8.69337 56.2083 6.30414 55.7458C6.77462 57.9732 8.56574 59.6426 9.17692 61.9155C8.16293 61.8466 7.70531 61.1796 7.31106 60.6369C5.70239 58.4041 4.10893 56.1243 2.57757 53.8128C1.85118 52.6957 1.95504 52.055 3.07289 51.4832C5.38588 50.2609 7.84599 49.8645 10.3911 50.3255C10.4849 50.3559 10.58 50.5423 10.7537 50.806C9.58401 52.6579 7.15666 51.3531 5.65614 52.7866C8.64883 54.5857 11.9266 55.0246 15.2017 55.1515C18.6328 55.2769 22.0143 55.0751 25.2957 54.0627C28.515 53.082 31.3704 51.4648 34.1611 49.5673C36.9836 47.7319 39.1621 45.3248 40.9312 42.422Z"
                fill="white"
              />
            </g>
            <path
              d="M23.3072 10.1077C23.8443 9.95295 24.7552 9.99237 25.3487 9.9703C25.7614 10.7316 25.2818 13.018 26.107 13.2033C26.4397 13.2523 27.0801 13.0522 27.1533 12.6235C27.1107 11.9574 26.964 10.9425 26.9324 10.3057C26.8309 8.32421 26.4943 6.57142 26.4844 4.38843C26.4902 3.53033 26.5905 2.97779 25.8174 2.96692C24.8354 2.93409 24.5191 4.33671 24.0422 5.25791C23.0898 7.08638 22.1514 8.91631 21.2723 10.851C21.0863 11.2819 20.7786 11.7986 20.7911 12.0815C20.8058 12.4772 21.5658 12.8808 22.0472 12.4528C22.4538 11.9324 23.0743 10.7166 23.3072 10.1077ZM25.0997 6.31223C25.2625 6.63903 25.3294 8.01154 25.2569 8.56701C25.0584 8.71507 24.3058 8.77674 23.9958 8.64562C24.1496 7.98608 24.6909 6.71973 24.9744 6.29906C25.0162 6.30345 25.058 6.30784 25.0997 6.31223ZM30.4672 3.2304C29.4897 3.42328 29.4247 4.97901 29.2058 6.1244C28.891 7.78057 28.5936 9.00218 28.2187 10.6943C28.0789 11.3553 27.457 13.1199 27.9026 13.4342C28.28 13.7273 28.9212 13.3864 29.1351 12.9584C29.2772 12.6778 29.532 11.5925 29.6162 11.1931C30.0124 9.16537 30.4239 7.39268 30.801 5.27851C30.9569 4.46435 31.4726 3.04045 30.4672 3.2304ZM33.3634 3.5348C32.3859 3.72768 32.3209 5.28341 32.102 6.4288C31.7871 8.08496 31.4898 9.30658 31.1149 10.9987C30.975 11.6597 30.3532 13.4243 30.7987 13.7386C31.1762 14.0317 31.8173 13.6908 32.0312 13.2628C32.1733 12.9822 32.4282 11.8969 32.5124 11.4975C32.9085 9.46977 33.3201 7.69707 33.6971 5.58291C33.8531 4.76875 34.3687 3.34485 33.3634 3.5348ZM39.9471 7.64752C39.8365 7.49512 39.6225 7.38816 39.4122 7.38013C38.6574 7.32896 38.6325 7.83312 38.3989 8.85028C38.1551 9.96489 37.9158 11.8402 37.6983 12.9716C37.6258 13.2596 37.5364 13.574 37.5746 13.7469C37.6266 13.9213 37.9015 14.1191 38.1088 14.155C38.635 14.2385 38.9025 14.2384 39.0915 13.7797C39.32 13.2125 39.4714 11.6377 39.582 10.9877C39.6069 10.751 40.621 10.21 41.2094 10.1029C41.4549 10.0443 42.0697 9.95402 42.3694 9.91514C42.6552 9.87479 43.204 9.6087 43.179 9.04298C43.1511 8.77259 42.8359 8.55646 42.5465 8.49788C42.0526 8.37559 41.4583 8.53836 41.0677 8.63808C40.705 8.74073 40.1848 9.13652 39.8484 8.98855C39.9246 8.53201 40.0505 8.13701 39.9471 7.64752ZM44.9313 12.8309C45.2772 12.7546 45.8656 12.6476 46.3104 12.5676C46.9699 12.4539 47.3106 12.2927 47.9606 12.1357C48.3497 12.0499 48.664 11.6044 48.6757 11.2255C48.702 10.9749 48.5656 10.3975 48.4857 10.2201C48.0348 8.75096 46.9355 8.22718 45.5213 8.55716C44.9468 8.66571 44.2632 9.14286 43.8632 9.73429C43.3532 10.3001 43.1079 11.1612 43.2466 12.3864C43.5025 13.5676 43.8221 14.0094 44.9016 14.5874C45.5722 15.038 46.9557 15.0004 47.7199 14.5599C47.9771 14.3898 48.0921 13.9655 47.8194 13.6131C47.324 13.2372 46.8551 13.9481 45.9427 13.6551C45.3433 13.4654 44.9944 13.3021 44.9313 12.8309ZM45.2079 10.1994C46.1597 9.58151 46.9893 9.725 47.2401 10.8212C47.1456 11.0506 46.7169 11.2449 46.3894 11.2808C45.8918 11.3271 45.0132 11.5163 44.767 11.4482C44.6819 11.1858 44.8152 10.4537 45.2079 10.1994ZM52.2012 8.9214C51.4406 8.92592 50.7195 9.08944 50.1539 9.64938C49.9326 9.87952 49.7986 10.4848 49.7884 10.8498C49.7687 11.4389 50.3052 11.9599 50.742 12.3577C51.1026 12.6771 51.9982 13.264 51.8517 13.8539C50.8963 14.9078 50.4675 13.7647 49.6819 14.0059C49.5368 14.047 49.3537 14.1826 49.3127 14.305C49.1127 15.0019 49.2886 15.2034 50.4443 15.5923C50.9338 15.7564 51.7113 15.7255 52.129 15.5019C52.71 15.197 53.217 14.659 53.3254 13.8962C53.4615 12.8688 52.6458 12.1918 52.1218 11.6862C52.0067 11.5756 51.3207 11.1375 51.3896 10.7506C51.4642 10.308 51.923 10.2295 52.6668 10.5188C52.9321 10.6734 53.5213 11.228 53.8232 11.0345C53.9712 10.9656 54.3068 10.7193 54.3031 10.3529C54.2986 9.85978 53.7922 9.45462 53.2587 9.17331C52.9919 9.03266 52.2723 8.91479 52.2012 8.9214ZM56.6383 14.0614C56.9842 13.9851 57.5726 13.878 58.0174 13.7981C58.6769 13.6844 59.0176 13.5231 59.6676 13.3662C60.0567 13.2804 60.371 12.8348 60.3827 12.456C60.409 12.2053 60.2726 11.6279 60.1927 11.4506C59.7418 9.98141 58.6425 9.45764 57.2283 9.78762C56.6538 9.89616 55.9702 10.3733 55.5702 10.9647C55.0602 11.5305 54.8149 12.3916 54.9536 13.6168C55.2095 14.798 55.5291 15.2399 56.6086 15.8179C57.2792 16.2684 58.6627 16.2308 59.4269 15.7903C59.6841 15.6203 59.7991 15.196 59.5264 14.8435C59.031 14.4677 58.5621 15.1786 57.6497 14.8856C57.0503 14.6959 56.7014 14.5325 56.6383 14.0614ZM56.9149 11.4299C57.8667 10.812 58.6963 10.9555 58.9471 12.0517C58.8526 12.2811 58.4239 12.4753 58.0964 12.5113C57.5988 12.5575 56.7202 12.7467 56.474 12.6786C56.3889 12.4163 56.5222 11.6842 56.9149 11.4299ZM62.374 11.6235C62.8847 11.7195 63.5354 11.1544 64.5972 11.097C64.913 11.1725 65.3103 11.9462 64.9125 12.3831C64.6605 12.6381 63.4718 12.4287 62.7676 12.5659C62.3646 12.6502 61.8466 12.8914 61.6311 13.0658C61.2926 13.3399 60.8794 13.7892 60.955 14.5432C60.9631 14.8678 61.2109 15.1895 61.4381 15.4386C61.9819 16.1574 62.5821 16.4739 63.3699 16.8804C63.5964 17.0028 64.157 17.1603 64.3981 17.1434C64.7366 17.1367 65.1513 16.6735 65.2781 16.4053C65.5799 15.6769 65.7996 14.9257 66.0376 14.1343C66.2236 13.4359 66.5378 12.4553 66.4783 11.5482C66.4431 10.8124 66.0399 10.0944 65.5577 9.86068C64.701 9.57356 63.988 9.79424 63.064 10.1476C62.598 10.2957 62.0411 10.5046 62.0522 11.0689C62.0676 11.3239 62.1197 11.4983 62.374 11.6235ZM63.6853 13.7462C63.9513 13.7601 64.4877 13.7461 64.6526 13.9183C64.6014 14.4056 64.4572 15.3759 64.0138 15.4419C63.3558 15.2742 62.3562 14.8735 62.4271 14.0645C62.6652 13.808 63.1533 13.7185 63.6853 13.7462ZM69.3166 10.7344C69.2059 10.582 68.9919 10.475 68.7816 10.467C68.0268 10.4158 68.002 10.92 67.7684 11.9371C67.5246 13.0518 67.2852 14.927 67.0678 16.0585C66.9953 16.3465 66.9059 16.6609 66.944 16.8338C66.9961 17.0082 67.2709 17.206 67.4783 17.2419C68.0045 17.3253 68.2719 17.3253 68.4609 16.8665C68.6895 16.2993 68.8409 14.7245 68.9515 14.0745C68.9763 13.8378 69.9904 13.2968 70.5789 13.1898C70.8243 13.1311 71.4391 13.0409 71.7388 13.002C72.0246 12.9616 72.5735 12.6956 72.5484 12.1298C72.5206 11.8594 72.2054 11.6433 71.916 11.5847C71.422 11.4624 70.8278 11.6252 70.4372 11.7249C70.0745 11.8276 69.5543 12.2234 69.2179 12.0754C69.294 11.6189 69.42 11.2239 69.3166 10.7344ZM77.3674 16.9017C77.1306 16.0744 76.4697 16.4695 75.6643 16.4975C74.5761 16.5379 73.9693 15.8829 73.7991 15.0908C73.6415 14.3141 74.6086 13.4162 75.6243 13.3963C76.0046 13.394 76.3659 13.5728 76.848 13.539C77.2298 13.5228 77.6262 13.0999 77.558 12.5437C77.4839 12.0433 76.0666 11.8661 75.6152 11.875C74.4047 11.8745 73.3583 12.4543 72.7305 13.4722C72.4323 14.0321 72.187 14.8932 72.3146 15.5542C72.6673 16.8863 73.5797 17.7142 75.0109 17.8928C76.3028 18.0567 77.5742 17.6132 77.3674 16.9017ZM80.8132 12.4917C80.6725 12.491 80.9742 11.4951 81.1053 10.9176C81.1895 10.5182 81.5199 9.9195 81.3022 9.44615C81.1864 9.20875 80.8236 9.04392 80.4961 9.07988C79.8549 9.15326 79.7356 10.4217 79.557 11.318C79.3827 12.1724 79.2069 12.7734 79.0026 13.7795C78.6819 15.2239 78.4629 15.8344 78.1568 17.1395C77.9759 17.9229 77.9093 18.6901 78.5132 18.8381C79.383 18.9999 79.4547 18.3176 79.599 17.6149C79.8678 16.531 79.9087 15.8737 80.2354 14.9086C80.3973 14.5737 80.6273 14.26 80.9013 14.0635C81.1475 13.8642 81.4773 13.6736 81.9367 13.7219C82.1515 13.9556 81.929 15.537 81.9078 15.8727C81.7372 17.361 81.4678 18.5855 81.5946 18.8522C81.7214 19.119 82.3209 19.3087 82.6608 19.0206C83.0455 18.7091 83.1018 17.7719 83.18 16.8932C83.2678 16.0578 83.4362 14.9916 83.4662 14.305C83.5114 13.3384 83.3369 12.3206 82.7374 12.1309C81.9335 11.8775 81.5401 12.54 80.8132 12.4917ZM9.93328 18.556C9.17264 18.5605 8.4516 18.724 7.88597 19.284C7.6647 19.5141 7.5307 20.1194 7.52049 20.4843C7.5008 21.0735 8.03729 21.5944 8.4741 21.9923C8.83468 22.3117 9.73025 22.8985 9.58378 23.4885C8.62838 24.5424 8.19952 23.3993 7.414 23.6405C7.26892 23.6816 7.08574 23.8171 7.04472 23.9395C6.84478 24.6364 7.02068 24.8379 8.17636 25.2269C8.66589 25.3909 9.44338 25.36 9.86104 25.1365C10.4421 24.8315 10.9491 24.2936 11.0574 23.5307C11.1936 22.5033 10.3779 21.8264 9.85384 21.3208C9.73877 21.2102 9.05281 20.7721 9.12163 20.3852C9.19631 19.9425 9.65502 19.8641 10.3989 20.1534C10.6642 20.308 11.2534 20.8626 11.5553 20.6691C11.7033 20.6002 12.0389 20.3539 12.0352 19.9875C12.0307 19.4944 11.5243 19.0892 10.9907 18.8079C10.724 18.6672 10.0044 18.5494 9.93328 18.556ZM16.4692 19.3978C16.4155 18.4349 16.7057 18.0853 16.8807 17.3576C17.0572 16.8835 17.1788 16.5302 16.4783 16.4988C15.3725 16.4389 15.3873 17.3696 15.1771 18.164C15.0877 18.4783 14.9303 19.3064 14.676 19.4486C14.4372 19.5784 13.4779 19.4635 13.1782 19.5023C12.8881 19.5845 12.6221 19.8381 12.5525 20.0982C12.458 20.3276 12.5101 20.7695 12.7864 20.9533C13.1697 21.1907 14.1897 20.8615 14.458 21.2557C14.3174 22.0574 14.2362 22.6964 14.097 23.2167C14.0567 23.4659 13.7784 24.5065 13.7103 24.7527C13.6591 24.9726 13.2269 26.1378 13.287 26.3693C13.364 26.5745 13.7964 26.7466 14.1071 26.7371C14.8135 26.7128 15.0595 25.1761 15.2067 24.7129C15.2777 24.4389 15.5296 23.3814 15.5868 23.1059C15.6636 22.7761 15.9265 21.213 16.2144 21.018C16.4885 20.8216 17.6199 21.0391 18.075 20.8616C18.3835 20.7392 18.593 20.353 18.5489 19.9683C18.4785 19.2993 16.7697 19.7531 16.4692 19.3978ZM20.1196 21.2596C20.6304 21.3555 21.281 20.7904 22.3429 20.7331C22.6587 20.8085 23.056 21.5823 22.6582 22.0191C22.4061 22.2741 21.2175 22.0647 20.5133 22.2019C20.1103 22.2862 19.5922 22.5274 19.3768 22.7018C19.0383 22.9759 18.6251 23.4252 18.7007 24.1792C18.7088 24.5039 18.9565 24.8255 19.1837 25.0746C19.7276 25.7934 20.3278 26.1099 21.1156 26.5165C21.3421 26.6388 21.9027 26.7963 22.1437 26.7794C22.4823 26.7727 22.897 26.3095 23.0237 26.0413C23.3255 25.3129 23.5452 24.5617 23.7833 23.7703C23.9693 23.0719 24.2835 22.0914 24.224 21.1842C24.1887 20.4484 23.7856 19.7304 23.3033 19.4967C22.4467 19.2096 21.7337 19.4302 20.8097 19.7836C20.3437 19.9317 19.7868 20.1406 19.7979 20.7049C19.8133 20.9599 19.8653 21.1343 20.1196 21.2596ZM21.4309 23.3822C21.6969 23.3961 22.2333 23.3821 22.3983 23.5543C22.347 24.0416 22.2028 25.0119 21.7595 25.0779C21.1014 24.9102 20.1018 24.5095 20.1728 23.7005C20.4109 23.444 20.8989 23.3545 21.4309 23.3822ZM27.0623 20.3704C26.9516 20.218 26.7376 20.111 26.5273 20.103C25.7725 20.0518 25.7477 20.556 25.5141 21.5731C25.2702 22.6878 25.0309 24.563 24.8134 25.6945C24.7409 25.9825 24.6516 26.2969 24.6897 26.4698C24.7418 26.6442 25.0166 26.842 25.224 26.8779C25.7501 26.9613 26.0176 26.9613 26.2066 26.5025C26.4351 25.9353 26.5866 24.3605 26.6971 23.7105C26.722 23.4738 27.7361 22.9329 28.3245 22.8258C28.57 22.7671 29.1848 22.6769 29.4845 22.638C29.7703 22.5976 30.3191 22.3316 30.2941 21.7658C30.2662 21.4954 29.9511 21.2793 29.6616 21.2207C29.1677 21.0984 28.5734 21.2612 28.1829 21.3609C27.8202 21.4636 27.2999 21.8594 26.9636 21.7114C27.0397 21.2549 27.1657 20.8599 27.0623 20.3704ZM34.5124 21.2942C34.4587 20.3313 34.7489 19.9817 34.9239 19.254C35.1004 18.7799 35.222 18.4267 34.5214 18.3953C33.4157 18.3353 33.4305 19.266 33.2203 20.0604C33.1309 20.3748 32.9735 21.2028 32.7192 21.345C32.4804 21.4748 31.5211 21.3599 31.2214 21.3988C30.9312 21.4809 30.6653 21.7345 30.5957 21.9946C30.5012 22.224 30.5533 22.6659 30.8296 22.8498C31.2129 23.0871 32.2329 22.7579 32.5012 23.1521C32.3606 23.9538 32.2793 24.5928 32.1402 25.1132C32.0999 25.3623 31.8216 26.4029 31.7535 26.6491C31.7023 26.869 31.2701 28.0342 31.3302 28.2658C31.4072 28.4709 31.8396 28.6431 32.1503 28.6335C32.8567 28.6092 33.1027 27.0725 33.2499 26.6093C33.3209 26.3353 33.5728 25.2778 33.6299 25.0023C33.7068 24.6725 33.9697 23.1094 34.2576 22.9144C34.5317 22.718 35.6631 22.9355 36.1182 22.7581C36.4266 22.6356 36.6362 22.2494 36.5921 21.8647C36.5217 21.1957 34.8129 21.6495 34.5124 21.2942ZM43.3136 25.7667C43.7547 25.5878 44.2707 25.7687 44.81 25.7269C45.3215 25.6821 45.5214 24.7177 44.9168 24.443C44.2426 24.161 43.981 24.3728 43.5545 24.145C43.3697 23.7595 43.7153 22.0785 43.8428 21.6695C44.0537 21.0019 44.3987 19.729 45.0531 19.7978C45.4429 19.8388 45.4862 20.3642 45.5823 20.6558C45.6783 20.9475 45.7597 21.3783 46.0228 21.42C46.3328 21.5512 46.8179 21.4895 46.9717 21.0975C47.1109 20.8446 47.1196 20.2262 46.8982 19.6539C46.5999 18.8764 46.0274 18.2954 45.0448 18.4033C44.0343 18.5082 43.443 19.1781 42.9214 20.1228C42.4533 20.9604 42.2629 21.7006 42.0388 22.761C41.9663 23.049 41.9869 23.6564 41.8441 23.8103C41.669 24.0031 41.8309 23.9357 41.4396 23.9086C41.0761 23.8845 40.6504 24.0509 40.5596 24.3792C40.5017 24.528 40.4255 24.717 40.5985 24.9464C41.0346 25.4849 41.0221 25.202 41.6868 25.4408C41.7968 26.2689 41.3984 27.6488 41.5143 28.4211C41.5913 28.8938 42.6033 29.0424 42.8568 28.5059C43.1527 27.8332 43.0931 26.1236 43.3136 25.7667ZM48.7359 22.6484C48.6252 22.496 48.4112 22.389 48.2009 22.381C47.4461 22.3298 47.4213 22.834 47.1877 23.8511C46.9438 24.9657 46.7045 26.841 46.487 27.9725C46.4145 28.2605 46.3252 28.5748 46.3633 28.7478C46.4154 28.9222 46.6902 29.12 46.8976 29.1559C47.4237 29.2393 47.6912 29.2393 47.8802 28.7805C48.1087 28.2133 48.2602 26.6385 48.3707 25.9885C48.3956 25.7518 49.4097 25.2108 49.9981 25.1038C50.2436 25.0451 50.8584 24.9549 51.1581 24.916C51.4439 24.8756 51.9927 24.6095 51.9677 24.0438C51.9398 23.7734 51.6247 23.5573 51.3352 23.4987C50.8413 23.3764 50.247 23.5392 49.8565 23.6389C49.4937 23.7416 48.9735 24.1374 48.6371 23.9894C48.7133 23.5329 48.8393 23.1379 48.7359 22.6484ZM54.8282 23.2746C54.3754 23.2974 54.1365 23.4272 53.776 23.6427C53.203 24.0047 53.1173 24.1506 52.7444 24.6182C52.0366 25.4588 51.7152 27.0439 52.3463 28.1378C52.7062 28.598 53.4669 29.1284 54.1697 29.2726C55.0087 29.4594 55.6741 29.29 56.2397 28.9975C57.2289 28.4258 57.9821 27.421 57.9445 26.305C58.0762 24.5169 56.8852 23.1248 54.8282 23.2746ZM53.5163 26.7827C53.4693 25.8909 54.2737 24.6663 55.0402 24.6061C56.0339 24.5275 56.7595 25.6596 56.386 26.8028C56.1948 27.4162 55.5405 27.8823 55.0957 27.9623C54.1519 28.1024 53.556 27.4767 53.5163 26.7827ZM60.423 26.5373C60.368 26.1233 61.0895 24.2142 60.564 23.7226C60.424 23.5812 60.1052 23.5336 59.9433 23.6011C59.2985 23.843 59.2517 24.556 59.1272 25.472C59.057 25.8729 58.9552 26.4393 58.8366 27.0322C58.7026 27.6375 58.6213 28.2765 58.5298 28.7455C58.4141 29.3105 58.2903 29.8184 58.5652 30.0162C58.7081 30.1297 59.1829 30.1656 59.4189 30.0637C59.6841 29.9508 59.923 29.5536 60.1508 29.127C60.542 28.3517 60.9735 27.8621 61.4307 27.2626C61.6761 26.9365 61.893 26.4807 62.3041 26.4535C62.4903 27.0924 62.124 27.8986 61.9446 28.668C61.8721 28.956 61.7674 29.2829 61.7762 29.4668C61.8225 30.2318 62.7033 30.1555 63.1634 29.7956C63.7606 29.3375 64.3042 28.4515 64.7474 27.8505C64.8991 27.6131 65.0925 27.38 65.3717 27.2686C65.4106 27.8358 65.2326 28.3238 65.1118 28.8038C65.0078 29.2575 64.8122 29.9126 64.857 30.4241C64.9348 31.291 65.9592 31.1875 66.2574 30.6276C66.4149 30.3344 66.5188 29.6134 66.606 29.1861C66.699 28.7032 66.7795 28.2049 66.8835 27.7513C67.0431 27.036 67.5536 25.2597 66.9673 24.9447C66.2601 24.5747 65.6652 25.4131 65.3304 25.7862C65.123 26.0178 64.8248 26.3102 64.616 26.5557C64.4072 26.8012 64.1625 26.9867 63.75 27.2952C63.8765 25.9571 63.8909 24.2131 62.5082 24.6449C61.9696 24.8135 61.4495 25.4768 61.0978 25.8762C60.9073 26.0814 60.5864 26.4559 60.423 26.5373ZM74.2917 25.8834C74.151 25.8827 74.4527 24.8868 74.5838 24.3093C74.668 23.9099 74.9984 23.3112 74.7807 22.8378C74.6649 22.6004 74.3021 22.4356 73.9746 22.4716C73.3334 22.5449 73.2142 23.8134 73.0355 24.7097C72.8612 25.5641 72.6854 26.165 72.4812 27.1712C72.1604 28.6156 71.9414 29.226 71.6353 30.5312C71.4544 31.3146 71.3879 32.0818 71.9917 32.2298C72.8616 32.3916 72.9333 31.7093 73.0775 31.0066C73.3463 29.9227 73.3872 29.2654 73.7139 28.3002C73.8758 27.9653 74.1058 27.6517 74.3799 27.4552C74.6261 27.2559 74.9558 27.0653 75.4153 27.1136C75.63 27.3473 75.4075 28.9287 75.3863 29.2643C75.2158 30.7527 74.9463 31.9772 75.0731 32.2439C75.1999 32.5106 75.7994 32.7003 76.1394 32.4123C76.524 32.1008 76.5803 31.1636 76.6586 30.2849C76.7464 29.4495 76.9147 28.3833 76.9447 27.6966C76.99 26.7301 76.8154 25.7123 76.2159 25.5226C75.412 25.2691 75.0186 25.9317 74.2917 25.8834ZM79.5135 30.5428C79.8594 30.4665 80.4478 30.3594 80.8926 30.2795C81.5521 30.1658 81.8928 30.0045 82.5428 29.8476C82.9319 29.7618 83.2462 29.3162 83.2579 28.9374C83.2842 28.6867 83.1478 28.1093 83.0679 27.932C82.617 26.4628 81.5177 25.939 80.1035 26.269C79.529 26.3776 78.8454 26.8547 78.4454 27.4461C77.9354 28.0119 77.6901 28.873 77.8288 30.0982C78.0847 31.2794 78.4043 31.7213 79.4838 32.2993C80.1543 32.7498 81.5379 32.7122 82.3021 32.2717C82.5593 32.1017 82.6743 31.6774 82.4016 31.3249C81.9062 30.9491 81.4373 31.66 80.5249 31.367C79.9255 31.1773 79.5766 31.0139 79.5135 30.5428ZM79.7901 27.9113C80.7419 27.2934 81.5715 27.4369 81.8223 28.5331C81.7278 28.7625 81.2991 28.9567 80.9716 28.9927C80.474 29.0389 79.5954 29.2281 79.3492 29.16C79.2641 28.8977 79.3974 28.1656 79.7901 27.9113ZM86.1275 26.5784C86.0169 26.426 85.8029 26.319 85.5926 26.311C84.8378 26.2598 84.8129 26.764 84.5793 27.7812C84.3355 28.8958 84.0962 30.771 83.8787 31.9025C83.8062 32.1905 83.7169 32.5049 83.755 32.6778C83.807 32.8522 84.0819 33.05 84.2893 33.0859C84.8154 33.1693 85.0829 33.1693 85.2719 32.7105C85.5004 32.1433 85.6519 30.5685 85.7624 29.9185C85.7873 29.6818 86.8014 29.1409 87.3898 29.0338C87.6353 28.9751 88.2501 28.8849 88.5498 28.846C88.8356 28.8057 89.3844 28.5396 89.3594 27.9739C89.3315 27.7035 89.0164 27.4873 88.7269 27.4288C88.233 27.3065 87.6387 27.4692 87.2481 27.569C86.8854 27.6716 86.3652 28.0674 86.0288 27.9194C86.105 27.4629 86.2309 27.0679 86.1275 26.5784ZM91.1118 31.7618C91.4576 31.6855 92.046 31.5784 92.4908 31.4985C93.1503 31.3848 93.4911 31.2235 94.141 31.0666C94.5301 30.9808 94.8444 30.5352 94.8561 30.1564C94.8824 29.9058 94.746 29.3283 94.6661 29.151C94.2152 27.6818 93.116 27.1581 91.7017 27.488C91.1272 27.5966 90.4436 28.0737 90.0436 28.6652C89.5337 29.231 89.2883 30.092 89.427 31.3172C89.6829 32.4985 90.0025 32.9403 91.082 33.5183C91.7526 33.9689 93.1361 33.9313 93.9003 33.4907C94.1575 33.3207 94.2725 32.8964 93.9998 32.544C93.5044 32.1681 93.0355 32.879 92.1231 32.586C91.5237 32.3963 91.1749 32.233 91.1118 31.7618ZM91.3883 29.1303C92.3401 28.5124 93.1697 28.6559 93.4205 29.7521C93.326 29.9815 92.8973 30.1757 92.5698 30.2117C92.0722 30.2579 91.1936 30.4471 90.9474 30.379C90.8624 30.1167 90.9956 29.3846 91.3883 29.1303Z"
              fill="white"
            />
            <defs>
              <clipPath id="clip0_2_304">
                <rect
                  width="28.3944"
                  height="34.4457"
                  fill="white"
                  transform="translate(41.518 42.6121) rotate(107.943)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="btn-hero-socmed">
          <img src={tab4} alt="" />
          <img src={tab3} alt="" />
          <img src={tab2} alt="" />
          <img src={tab1} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Hero
