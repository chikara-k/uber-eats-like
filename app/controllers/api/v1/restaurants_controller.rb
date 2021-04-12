# moduleについては、3-1参照
module Api
  module V1
    class RestaurantsController < ApplicationController
      def index
        restaurants = Restaurant.all
# JSON形式でデータを返却する記述 と リクエスト成功と共にデータを返す記述
        render json: {
          restaurants: restaurants
        }, status: :ok
      end
    end
  end
end