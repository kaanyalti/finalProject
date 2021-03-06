class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    user = User.new({email: params[:email]})
    if user.save
      puts "User successfuly created"
      # saving user's youtube videos
      params[:videoData].each do |v|
        user.videos.create({youtube_id: v["id"], title: v["title"]})
      end
    else
      puts "User already exists"
      user = User.find_by_email(params[:email])
      # saving new youtube videos
      params[:videoData].each do |v|
        user.videos.create({youtube_id: v["id"], title: v["title"]})
      end
    end
    render nothing: true
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password_digest, :isCreator)
    end
end
