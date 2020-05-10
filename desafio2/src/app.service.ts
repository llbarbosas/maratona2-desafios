import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Maratona } from './maratona.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Maratona) private readonly repository: Repository<Maratona>) { }

  public async getAll() {
    return await this.repository.find();
  }

  public async create(aula: string) {
    const maratona = this.repository.create({
      id: await this.repository.count() + 1, // autoincrement nont working
      aula
    })

    return await this.repository.save(maratona);
  }
}