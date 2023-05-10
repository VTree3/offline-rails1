class GalleryController < ApplicationController
    def index
        @images = Image.page(params[:page]).per(12)
      end
end
