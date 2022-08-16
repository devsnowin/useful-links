<footer>
  <p>Designed by <a href="https://devsnow.in" target="_blank">devsnow</a></p>
</footer>

<style>
    footer{
      text-align: center;
      margin-bottom: 4rem;
    }
    
    a{
      font-size: 1.2em;
      position: relative;
      overflow: hidden;
    }

    a::before{
      content: '';
      position: absolute;
      width: 100%;
      height: 2.5px;
      bottom: 0;
      background-color: rgb(49, 232, 171);
      transition: all 0.3s ease-in-out;

      transform: scaleX(0);
    }
    
    a:hover::before{
      transform: scaleX(100%);
    }
</style>
