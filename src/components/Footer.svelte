<footer>
  <p>Designed by <a href="https://devsnow.in" target="_blank">devsnow</a></p>
</footer>

<style>
    footer{
      margin-bottom: 4rem;
      text-align: center;
    }
    
    a{
      font-size: 1.2em;
      position: relative;
      overflow: hidden;
    }
    
    a::before{
      content: '';
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 2.5px;
      bottom: 0;
      background-color: rgb(49, 232, 171);
      transition: all 0.3s ease-in-out;
    }
    
    a:hover::before{
      height: 80%;
    }
</style>
