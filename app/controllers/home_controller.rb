class HomeController < ApplicationController
    def index
        render 'index'
    end
    def offline
        render 'offline', layout: false
    end 
end
